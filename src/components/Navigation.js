import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import NavigationRow from './NavigationRow'

const Navigation = styled.nav``

export default props => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      apps: allAppsYaml {
        edges {
          node {
            ...AppInfo
          }
        }
      }
      activity: allMarkdownRemark(
        filter: { fields: { collection: { eq: "activity" } } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      technology: allMarkdownRemark(
        filter: { fields: { collection: { eq: "tech" } } }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  const items = data.apps.edges.map(({node: app}) => app)

  const badges = {
    "Activity": data.activity.edges.length,
    "Projects": data.projects.edges.length,
    "Blog": data.posts.edges.length,
    "Tech": data.technology.edges.length
  }

  return (
    <Navigation>
      {items.map(item => (
        <NavigationRow
          key={item.path}
          icon={item.icon}
          color={item.color}
          title={item.title}
          to={item.slug}
          badge={badges[item.title]}
        />
      ))}
    </Navigation>
  )
}

export const query = graphql`
  fragment AppInfo on AppsYaml {
    id
    icon
    slug
    title
    color
  }
`
