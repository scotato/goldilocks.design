const { graphql } = require('@octokit/graphql')
const frontmatter = require('front-matter')
const getFiles = require('./getFiles')

const urlToRepo = url => {
  const [ owner, name ] = url.replace('https://github.com/', '').split('/')
  return { name, owner }
}

module.exports = async ({ actions: { createNode }, createNodeId, createContentDigest }) => {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    }
  })

  const projects = await getFiles(`${__dirname}/../content/projects`, { match: /.md$/ })
    .map(frontmatter)
    .map(project => project.attributes.github)
    .map(urlToRepo)
    .map(project => project.name)
   
  const { user } = await graphqlWithAuth(
    `{
      user(login: "scotato") {
        repositories(first: 100) {
          nodes {
            name
            url
            description
            createdAt
            pushedAt
            updatedAt
            homepageUrl
            openGraphImageUrl
            primaryLanguage {
              color
              name
            }
            stargazers {
              totalCount
            }
            defaultBranchRef {
              name
              target {
                ... on Commit {
                  history(first: 0) {
                    totalCount
                  }
                }
              }
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
        }
      }
    }`
  )

  user.repositories.nodes
    .filter(repo => projects.includes(repo.name))
    .forEach(repo => {
      const { primaryLanguage, stargazers, defaultBranchRef, ref, refs, ...meta } = repo
      const repository = {
        ...meta,
        language: primaryLanguage.name,
        stargazers: stargazers.totalCount,
        commits: ref ? ref.target.history.totalCount : 0,
        version: refs.edges.length ? refs.edges[0].node.name : 'v0.0.0'
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

    return
}
