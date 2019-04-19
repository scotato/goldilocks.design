import React from 'react'
import { graphql } from 'gatsby'

import Card, { Cards } from '../components/Card'
import { AppBadge } from '../components/AppIcon'

export default props => (
  <Cards>
    {props.data.allMarkdownRemark.edges.map(({ node }) => (
      <Card
        key={node.title}
        title={node.frontmatter.title}
        detail={node.frontmatter.description || `${node.timeToRead} min read`}
        date={node.frontmatter.date}
        to={node.fields.slug}
        badge={<AppBadge {...node.fields.app} isCircle />}
      />
    ))}
  </Cards>
)

export const query = graphql`
  fragment ScreenInfo on ScreensYaml {
    id
    icon
    title
    color
    colorWeight
  }
`

export const pageQuery = graphql`
  query {
    page: screensYaml(id: { eq: "lock" }) {
      ...ScreenInfo
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { ne: "tech" } } }
        limit: 3
      ) {
      edges {
        node {
          timeToRead
          fields {
            slug
            collection
            app {
              ...AppInfo
            }
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`