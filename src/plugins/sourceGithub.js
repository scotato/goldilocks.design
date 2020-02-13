const { graphql } = require('@octokit/graphql')
const frontmatter = require('front-matter')
const getFiles = require('./getFiles')

module.exports = async ({ actions: { createNode }, createNodeId, createContentDigest }) => {
  const ids = await getFiles(`${__dirname}/../content`, { match: /.md$/ })
    .map(frontmatter)
    .filter(project => project.attributes.githubNodeId)
    .map(project => project.attributes.githubNodeId)

  const repositories = await graphql({
    query: `query repositories($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on Repository {
          id
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
    }`,
    ids,
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    }
  })

  repositories.nodes.forEach(repo => {
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

  return
}
