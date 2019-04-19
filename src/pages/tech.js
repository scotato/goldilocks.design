import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import AppIcon, { Apps } from '../components/AppIcon'

const TechPage = ({ data: { technology }}) => (
  <Apps>
    {technology.edges.map(post => (
      <AppIcon
        key={post.node.frontmatter.date}
        title={post.node.frontmatter.title}
        detail={post.node.frontmatter.description}
        date={post.node.frontmatter.date}
        to={post.node.fields.slug}
      >
        <Img fluid={post.node.frontmatter.badge.childImageSharp.fluid} />
      </AppIcon>
    ))}
  </Apps>
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
