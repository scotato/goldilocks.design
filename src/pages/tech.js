import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/Layout'
import Header from '../components/Header'
import TechRow from '../components/TechRow'
import TechIndicators from '../components/TechIndicators'

const TechPage = ({ data: { technology }, ...props}) => (
  <>
    <Header title="Tech" {...props} />
    <Container>
      {technology.edges.map(({node: tech}) => (
        <TechRow
          to={tech.fields.slug}
          key={tech.fields.slug}
          badge={tech.frontmatter.badge.childImageSharp.fluid}
          title={tech.frontmatter.title}
          description={tech.frontmatter.description}
          indicators={<TechIndicators id={tech.frontmatter.id} />}
        />
      ))}
    </Container>
  </>
)

export default TechPage

export const pageQuery = graphql`
  query {
    technology: allMarkdownRemark(
        filter: { fields: { collection: { eq: "tech" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            ...Tech
          }
        }
    }
  }
`

export const query = graphql`
  fragment Tech on MarkdownRemark {
    fields {
      slug
      collection
    }
    frontmatter {
      id
      title
      description
      github
      docs
      website
      version
      badge {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      date
      tech {
        fields {
          slug
          collection
        }
        frontmatter {
          id
          title
          description
          github
          docs
          website
          version
          badge {
            childImageSharp {
              fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          date
        }
      }
    }
  }
`

