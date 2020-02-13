const { graphql } = require('@octokit/graphql')
const frontmatter = require('front-matter')
const getFiles = require('./getFiles')

const urlToRepo = url => {
  const [ owner, name ] = url.replace('https://github.com/', '').split('/')
  return { name, owner }
}

module.exports = async ({ actions: { createNode } }) => {
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
            description
            pushedAt
            homepageUrl
            openGraphImageUrl
            primaryLanguage {
              color
              name
            }
            releases(first: 100) {
              nodes {
                createdAt
                name
                description
                tagName
              }
            }
          }
        }
      }
    }`
  )

  const repositories = user.repositories.nodes
    .filter(repo => projects.includes(repo.name))
  console.log(JSON.stringify(repositories, null, 2))

  // projects.forEach(project => {
  //   createNode({
  //     project
  //   })
  // })

  // repository.forEach(datum => createNode(processDatum(datum)))
  return
}
