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
              collection
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
      console.log(result.errors)
      throw result.errors
    }

    const remark = result.data.allMarkdownRemark.edges
    const posts = remark.filter(({node: post}) => post.fields.collection === 'blog')
    const projects = remark.filter(({node: project}) => project.fields.collection === 'projects')
    const postTemplate = path.resolve(`src/templates/post.js`)
    const projectTemplate = path.resolve(`src/templates/project.js`)
    console.log('posts', JSON.stringify(posts))

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: postTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      })
    })

    projects.forEach(project => {
      createPage({
        path: project.node.fields.slug,
        component: projectTemplate,
        context: {
          slug: project.node.fields.slug,
        }
      })
    })
  })

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const collection = node => getNode(node.parent).sourceInstanceName
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `slug`,
      node,
      value: `/${collection(node)}${createFilePath({ node, getNode })}`,
    })

    createNodeField({
      name: `collection`,
      node,
      value: collection(node),
    })

    createNodeField({
      name: `app`,
      node,
      value: collection(node),
    })
  }
}