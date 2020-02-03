import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import moment from 'moment'

import ToolsRow from './ToolsRow'
import ToolsIndicators from './ToolsIndicators'
import LinkRow from './LinkRow'

const ContentList = styled.nav``

export default props => {
  const data = useStaticQuery(graphql`
    query ContentListQuery {
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
    .map(project => project.node)
    .filter(project => props.projects.includes(project.frontmatter.id))

  const posts = data.posts.edges
    .map(post => post.node)
    .filter(post => props.posts.includes(post.frontmatter.id))

  const tools = data.tools.edges
    .map(tool => tool.node)
    .filter(tool => props.tools.includes(tool.frontmatter.id))

  const getIndicators = ({ projects, posts, tools }) => ({
    projectCount: projects ? projects.length : 0,
    postCount: posts ? posts.length : 0,
    toolCount: tools ? tools.length : 0,
  })

  const Projects = props => props.items.length ? (
    <>
      <h2>Projects</h2>
      {props.items.map(project => (
        <LinkRow
          to={project.fields.slug}
          key={project.fields.slug}
          badge={project.frontmatter.badge.childImageSharp.fluid}
          title={project.frontmatter.title}
          description={project.frontmatter.description}
          detail={moment(project.frontmatter.createdAt).format("MMM YYYY")}
        />
      ))}
    </>
  ) : null

  const Posts = props => props.items.length ? (
    <>
      <h2>Posts</h2>
      {props.items.map(post => (
        <LinkRow
          to={post.fields.slug}
          key={post.fields.slug}
          badge={post.frontmatter.badge.childImageSharp.fluid}
          title={post.frontmatter.title}
          description={`${post.timeToRead} Minute Read`}
          detail={moment(post.frontmatter.createdAt).format("MMM YYYY")}
        />
      ))}
    </>
  ) : null

  const Tools = props => props.items.length ? (
    <>
      <h2>Tools</h2>
      {props.items.map(tool => (
        <ToolsRow
          to={tool.fields.slug}
          key={tool.fields.slug}
          badge={tool.frontmatter.badge.childImageSharp.fluid}
          title={tool.frontmatter.title}
          description={tool.frontmatter.description}
          indicators={<ToolsIndicators {...getIndicators(tool.frontmatter)} />}
        />
      ))}
    </>
  ) : null

  return (
    <ContentList>
      <Projects items={projects} />
      <Posts items={posts} />
      <Tools items={tools} />
    </ContentList>
  )
}
