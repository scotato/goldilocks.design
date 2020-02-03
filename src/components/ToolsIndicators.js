import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import ToolIndicator from './ToolIndicator'

const ToolsIndicators = styled.div`
  display: flex;
`

export default props => {
  const data = useStaticQuery(graphql`
    query ToolsIndicatorsQuery {
      site {
        siteMetadata {
          content {
            id
            icon
            slug
            title
            color
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
      ) {
        edges {
          node {
            ...Project
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "posts" } } }
      ) {
        edges {
          node {
            ...Post
          }
        }
      }
      tools: allMarkdownRemark(
        filter: { fields: { collection: { eq: "tools" } } }
      ) {
        edges {
          node {
            ...Tool
          }
        }
      }
    }
  `)

  const projects = data.projects.edges
    ? data.projects.edges
      .filter(project => project.node && project.node.frontmatter.tools && project.node.frontmatter.tools
        .filter(item => item && item.frontmatter && item.frontmatter.id === props.id).length)
    : []

  const posts = data.posts.edges
    ? data.posts.edges
      .filter(post => post.node && post.node.frontmatter.tools && post.node.frontmatter.tools
        .filter(item => item && item.frontmatter && item.frontmatter.id === props.id).length)
    : []

  const tools = data.tools.edges
    ? data.tools.edges
      .filter(tools => tools.node && tools.node.frontmatter.tools && tools.node.frontmatter.tools
        .filter(item => item && item.frontmatter && item.frontmatter.id === props.id).length)
    : []
  
  const { content } = data.site.siteMetadata
  
  const indicators = [
    content.find(item => item.id === 'projects'),
    content.find(item => item.id === 'posts'),
    content.find(item => item.id === 'tools')
  ]

  const indicatorData = {
    projects: projects.length,
    posts: posts.length,
    tools: tools.length
  }

  return (
    <ToolsIndicators>
      {indicators.map(item => (
        <ToolIndicator 
          key={item.id}
          icon={item.icon}
          color={item.color}
          title={item.title}
          badge={indicatorData[item.id]}
        />
      ))}
    </ToolsIndicators>
  )
}
