import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ContentList from './ContentList'

export default ({ query }) => {
  const data = useStaticQuery(graphql`
    query SearchQuery {
      posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "posts" } } }
      ) {
        edges {
          node {
            ...Post
            frontmatter {
              ...PostFrontmatter
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
      ) {
        edges {
          node {
            ...Project
            frontmatter {
              ...ProjectFrontmatter
            }
          }
        }
      }
      tools: allMarkdownRemark(
        filter: { fields: { collection: { eq: "tools" } } }
      ) {
        edges {
          node {
            ...Tool
            frontmatter {
              ...ToolFrontmatter
            }
          }
        }
      }
    }
  `)

  const posts = data.posts.edges
    .map(edge => edge.node)
    .filter(post => post.frontmatter.title.toLowerCase().includes(query))
  
  const projects = data.projects.edges
    .map(edge => edge.node)
    .filter(project => project.frontmatter.title.toLowerCase().includes(query))
  
  const tools = data.tools.edges
    .map(edge => edge.node)
    .filter(tool => tool.frontmatter.title.toLowerCase().includes(query))

  return (
    <ContentList
      posts={posts}
      projects={projects}
      tools={tools}
      hideDetail
    />
  )
}
