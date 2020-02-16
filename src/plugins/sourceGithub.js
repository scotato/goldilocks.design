const Promise = require('bluebird')
const { graphql } = require('@octokit/graphql')
const frontmatter = require('front-matter')
const getFiles = require('./getFiles')

const parseRepoUrl = url => {
  const [ owner, name ] = url.replace('https://github.com/', '').split('/')
  return { owner, name }
}

async function queryRepo({ owner, name }) {
  const query = await graphql({
    query: `query ($owner: String!, $name: String!) {
      repository(owner:$owner, name:$name) {
        id
        name
        url
        description
        createdAt
        pushedAt
        updatedAt
        homepageUrl
        openGraphImageUrl
        usesCustomOpenGraphImage
        isPrivate
        primaryLanguage {
          color
          name
        }
        stargazers {
          totalCount
        }
        ref(qualifiedName: "master") {
          target {
            ... on Commit {
              history(first: 0) {
                totalCount
              }
            }
          }
        }
        refs(refPrefix: "refs/tags/", last: 1) {
          edges {
            node {
              name
            }
          }
        }
      }
    }`,
    owner,
    name,
    headers: {
      authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    }
  })

  return query.repository
}

module.exports = async ({ createNode, createNodeId, createContentDigest }) => {
  const githubUrls = await getFiles(`${__dirname}/../content`, { match: /.md$/ })
    .map(frontmatter)
    .filter(project => project.attributes.github)
    .map(project => project.attributes.github)

  const repos = githubUrls.map(parseRepoUrl).map(queryRepo)

  await Promise.all(repos).then(repositories => {
    repositories.forEach(repo => {
      const { primaryLanguage, stargazers, defaultBranchRef, ref, refs, ...meta } = repo
      const versionBlacklist = ['vundefined', 'type-name-lookup-fail']
      const versionName = refs.edges.length ? refs.edges[0].node.name : ''
      const version = versionBlacklist.includes(versionName) ? '' : versionName
  
      const repository = {
        ...meta,
        language: primaryLanguage.name,
        stargazers: stargazers.totalCount,
        commits: ref ? ref.target.history.totalCount : 0,
        version
      }
  
      const nodeMeta = {
        id: createNodeId(`github-repo-${repository.name}`),
        parent: null,
        children: [],
        internal: {
          type: `GithubRepo`,
          mediaType: `application/javascript`,
          content: JSON.stringify(repository),
          contentDigest: createContentDigest(repository)
        }
      }

      createNode({ ...repository, ...nodeMeta })
    })
  })

  return
}
