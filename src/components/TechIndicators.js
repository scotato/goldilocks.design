import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import TechIndicator from '../components/TechIndicator'

const TechIndicators = styled.div`
  display: flex;
`

export default props => {
  const data = useStaticQuery(graphql`
    query TechIndicatorsQuery {
      navigation: allNavigationYaml {
        edges {
          node {
            ...NavigationInfo
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
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        edges {
          node {
            ...Post
          }
        }
      }
      technology: allMarkdownRemark(
        filter: { fields: { collection: { eq: "tech" } } }
      ) {
        edges {
          node {
            ...Tech
          }
        }
      }
    }
  `)

  const projects = data.projects.edges
    ? data.projects.edges
      .filter(project => project.node && project.node.frontmatter.tech && project.node.frontmatter.tech
        .filter(item => item && item.frontmatter && item.frontmatter.id === props.id).length)
    : []

  const posts = data.posts.edges
    ? data.posts.edges
      .filter(post => post.node && post.node.frontmatter.tech && post.node.frontmatter.tech
        .filter(item => item && item.frontmatter && item.frontmatter.id === props.id).length)
    : []

  const technology = data.technology.edges
    ? data.technology.edges
      .filter(tech => tech.node && tech.node.frontmatter.tech && tech.node.frontmatter.tech
        .filter(item => item && item.frontmatter && item.frontmatter.id === props.id).length)
    : []
  
  const navigation = data.navigation.edges.map(item => item.node)
  
  const indicators = [
    navigation.find(item => item.id === 'projects'),
    navigation.find(item => item.id === 'blog'),
    navigation.find(item => item.id === 'tech')
  ]

  const indicatorData = {
    projects: projects.length,
    blog: posts.length,
    tech: technology.length
  }

  return (
    <TechIndicators>
      {indicators.map(item => (
        <TechIndicator 
          key={item.id}
          icon={item.icon}
          color={item.color}
          title={item.title}
          badge={indicatorData[item.id]}
        />
      ))}
    </TechIndicators>
  )
}
