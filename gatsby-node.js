const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

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
    const posts = remark.filter(({node: post}) => post.fields.collection === 'posts')
    const projects = remark.filter(({node: project}) => project.fields.collection === 'projects')
    const technology = remark.filter(({node: tech}) => tech.fields.collection === 'tech')
    const template = name => path.resolve(`src/templates/${name}.js`)

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: template('post'),
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
        component: template('project'),
        context: {
          slug: project.node.fields.slug,
        }
      })
    })

    technology.forEach(tech => {
      createPage({
        path: tech.node.fields.slug,
        component: template('tech'),
        context: {
          slug: tech.node.fields.slug,
        }
      })
    })
  })
