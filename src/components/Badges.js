import React from 'react'
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

export default ({ projects = [], posts = [], tools = [], size }) => {
  const projectBadge = project => ({
    id: project.frontmatter.id,
    title: project.frontmatter.title,
    fluid: project.frontmatter.logo.childImageSharp.fluid
  })

  const postBadge = post => ({
    id: post.frontmatter.id,
    title: post.frontmatter.title,
    fluid: post.frontmatter.badge.childImageSharp.fluid
  })

  const toolBadge = tool => ({
    id: tool.frontmatter.id,
    title: tool.frontmatter.title,
    fluid: tool.frontmatter.badge.childImageSharp.fluid
  })

  const badges = [
    ...projects.map(projectBadge),
    ...posts.map(postBadge),
    ...tools.map(toolBadge)
  ]

  return (
    <Badges>
      {badges.map(item => (
        <Badge key={item.id} fluid={item.fluid} size={size} title={item.title} />
      ))}
    </Badges>
  )
}
