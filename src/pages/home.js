import React from 'react'
import { graphql } from 'gatsby'

import AppIcon, { Apps } from '../components/AppIcon'

const HomePage = props => (
  <Apps>
    {props.data.apps.edges.map(({node: app}) => (
      <AppIcon
        key={app.id}
        title={app.title}
        icon={app.icon}
        to={app.slug}
        color={app.color}
        colorWeight={app.colorWeight}
      />
    ))}
  </Apps>
)

export default HomePage

export const query = graphql`
  fragment AppInfo on AppsYaml {
    id
    icon
    slug
    title
    color
    colorWeight
  }
`

export const pageQuery = graphql`
  query {
    page: screensYaml(id: { eq: "home" }) {
      ...ScreenInfo
    }
    apps: allAppsYaml {
      edges {
        node {
          ...AppInfo
        }
      }
    }
  }
`