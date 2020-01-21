import React from 'react'
import { graphql } from 'gatsby'

export default props => (
  <div>
    {props.data.allMarkdownRemark.edges.map(({ node }) => node.title)}
  </div>
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
    page: appsYaml(id: { eq: "feed" }) {
      ...AppInfo
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { ne: "tech" } } }
        limit: 100
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