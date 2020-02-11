import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Badges = styled.div`
  display: flex;
`

const Badge = styled(Img)`
  margin: 0 ${props => props.theme.size[200]};
  width: ${props => props.theme.size[props.size || 500]};
  height: ${props => props.theme.size[props.size || 500]};
`

export default props => {
  const data = useStaticQuery(graphql`
    query BadgesQuery {
      projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
        sort: { fields: [frontmatter___updatedAt, frontmatter___commits], order: DESC }
      ) {
        edges {
          node {
            ...Project
          }
        }
      }

      tools: allMarkdownRemark(
        filter: { fields: { collection: { eq: "tools" } } }
        sort: { fields: [frontmatter___title], order: ASC }
      ) {
        edges {
          node {
            ...Tool
          }
        }
      }

      posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "posts" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            ...Post
          }
        }
    }
    }
  `)

  const projectBadge = ({node: project}) => ({
    id: project.frontmatter.id,
    title: project.frontmatter.title,
    fluid: project.frontmatter.logo.childImageSharp.fluid
  })

  const postBadge = ({node: post}) => ({
    id: post.frontmatter.id,
    title: post.frontmatter.title,
    fluid: post.frontmatter.badge.childImageSharp.fluid
  })

  const toolBadge = ({node: tool}) => ({
    id: tool.frontmatter.id,
    title: tool.frontmatter.title,
    fluid: tool.frontmatter.badge.childImageSharp.fluid
  })

  const badgesAll = [
    ...data.projects.edges.map(projectBadge),
    ...data.posts.edges.map(postBadge),
    ...data.tools.edges.map(toolBadge)
  ]
  
  const ids = props.ids || []
  const badges = badgesAll.filter(badge => ids.includes(badge.id))

  return (
    <Badges>
      {badges.map(item => (
        <Badge key={item.id} fluid={item.fluid} size={props.size} title={item.title} />
      ))}
    </Badges>
  )
}

