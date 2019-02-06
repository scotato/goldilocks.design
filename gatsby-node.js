const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions: { createPage } }) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
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
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const data = result.data.allMarkdownRemark.edges
    const pages = data.filter(edge => edge.node.fileAbsolutePath.includes('/pages/'))
    const posts = data.filter(edge => edge.node.fileAbsolutePath.includes('/posts/'))
    const page = path.resolve(`src/templates/page.js`)
    const post = path.resolve(`src/templates/post.js`)

    pages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.frontmatter.slug,
        component: page,
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

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
}