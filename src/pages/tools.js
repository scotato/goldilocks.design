import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/Layout'
import Header from '../components/Header'
import { Back } from '../components/Link'
import ToolsRow from '../components/ToolsRow'
import ToolsIndicators from '../components/ToolsIndicators'

const ToolsPage = ({ data: { tools } }) => (
  <>
    <Header
      title="Tools"
      primary={<Back to='/' />}
    />
    <Container>
      {tools.edges.map(({node: tools}) => (
        <ToolsRow
          to={tools.fields.slug}
          key={tools.fields.slug}
          badge={tools.frontmatter.badge.childImageSharp.fluid}
          title={tools.frontmatter.title}
          description={tools.frontmatter.description}
          indicators={<ToolsIndicators id={tools.frontmatter.id} />}
        />
      ))}
    </Container>
  </>
)

export default ToolsPage

export const pageQuery = graphql`
  query {
    tools: allMarkdownRemark(
        filter: { fields: { collection: { eq: "tools" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            ...Tool
          }
        }
    }
  }
`

export const query = graphql`
  fragment Tool on MarkdownRemark {
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
      tools {
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

