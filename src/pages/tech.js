import React from 'react'
import { graphql } from 'gatsby'

const TechPage = ({ data: { technology }}) => (
  <>
    {technology.edges.map(post => post.node.frontmatter.title)}
  </>
)

export default TechPage

export const query = graphql`
  fragment Tech on MarkdownRemark {
    fields {
      slug
      collection
      app {
        ...AppInfo
      }
    }
    frontmatter {
      id
      title
      description
      url
      urlSource
      urlApi
      badge {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sticker {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      date
      tech {
        fields {
          slug
          collection
          app {
            ...AppInfo
          }
        }
        frontmatter {
          id
          title
          description
          url
          urlSource
          urlApi
          badge {
            childImageSharp {
              fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          sticker {
            childImageSharp {
              fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          date
        }
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "tech" }) {
      ...AppInfo
    }
    technology: allMarkdownRemark(
        filter: { fields: { collection: { eq: "tech" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            ...Tech
          }
        }
    }
  }
`
