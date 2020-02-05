import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import moment from 'moment'

import LinkRowSmall from './LinkRowSmall'

const ContentList = styled.nav`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-row-gap: ${props => props.theme.size[500]};
`

const Content = styled.div``

const Projects = props => props.items.length ? (
  <Content>
    <strong>Projects</strong>
    <div>
      {props.items.map(project => (
        <LinkRowSmall
          to={project.fields.slug}
          key={project.fields.slug}
          badge={project.frontmatter.logo.childImageSharp.fluid}
          title={project.frontmatter.title}
          description={project.frontmatter.description}
          detail={moment(project.frontmatter.createdAt).format("MMM YYYY")}
        />
      ))}
    </div>
  </Content>
) : null

const Posts = props => props.items.length ? (
  <Content>
    <strong>Posts</strong>
    <div>
      {props.items.map(post => (
        <LinkRowSmall
          to={post.fields.slug}
          key={post.fields.slug}
          badge={post.frontmatter.badge.childImageSharp.fluid}
          title={post.frontmatter.title}
          detail={moment(post.frontmatter.createdAt).format("MMM YYYY")}
        />
      ))}
    </div>
  </Content>
) : null

const Tools = props => props.items.length ? (
  <Content>
    <strong>Tools</strong>
    <div>
      {props.items.map(tool => (
        <LinkRowSmall
          to={tool.fields.slug}
          key={tool.fields.slug}
          badge={tool.frontmatter.badge.childImageSharp.fluid}
          title={tool.frontmatter.title}
        />
      ))}
    </div>
  </Content>
) : null

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

  return (
    <ContentList>
      <Projects items={projects} title={props.title} />
      <Posts items={posts} title={props.title} />
      <Tools items={tools} title={props.title} />
    </ContentList>
  )
}
