const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions: { createPage } }) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___published], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      tech: allTechYaml {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const data = result.data.allMarkdownRemark.edges
    const posts = data.filter(edge => edge.node.fileAbsolutePath && edge.node.fileAbsolutePath.includes('/posts/'))
    const technology = result.data.tech.edges
    const post = path.resolve(`src/templates/post.js`)
    const tech = path.resolve(`src/templates/tech.js`)

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: `blog/${edge.node.frontmatter.slug}`,
        component: post,
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    technology.forEach(edge =>
      createPage({
        path: `tech/${edge.node.slug}`,
        component: tech,
        context: {
          slug: edge.node.slug
        },
      })  
    )
  })

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  // if (node.internal.type === `TechYaml`) {
  //   const value = createFilePath({ node, getNode })
  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value,
  //   })
  // }
}