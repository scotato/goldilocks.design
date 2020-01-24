import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import NavigationRow from './NavigationRow'

const Navigation = styled.nav``

export default () => {
  const data = useStaticQuery(graphql`
    query AppsQuery {
      apps: allAppsYaml {
        edges {
          node {
            ...AppInfo
          }
        }
      }
    }
  `)

  const items = data.apps.edges.map(({node: app}) => app)

  return (
    <Navigation>
      {items.map(item => (
        <NavigationRow
          key={item.path}
          icon={item.icon}
          color={item.color}
          title={item.title}
          to={item.slug}
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
