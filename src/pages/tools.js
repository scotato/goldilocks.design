import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/Layout'
import Header from '../components/Header'
import { Back } from '../components/Link'
import ToolsRow from '../components/ToolsRow'
import ToolsIndicators from '../components/ToolsIndicators'

const getIndicators = ({ projects, posts, tools }) => ({
  projectCount: projects ? projects.length : 0,
  postCount: posts ? posts.length : 0,
  toolCount: tools ? tools.length : 0,
})

const ToolsPage = ({ data: { tools } }) => (
  <>
    <Header
      title="Tools"
      primary={<Back to='/' />}
    />
    <Container>
      {tools.edges.map(({node: tool}) => (
        <ToolsRow
          to={tool.fields.slug}
          key={tool.fields.slug}
          badge={tool.frontmatter.badge.childImageSharp.fluid}
          title={tool.frontmatter.title}
          description={tool.frontmatter.description}
          indicators={<ToolsIndicators {...getIndicators(tool.frontmatter)} />}
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
            ...Tool
          }
        }
    }
  }
`

export const query = graphql`
  fragment Tool on MarkdownRemark {
    id
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
      projects
      posts
      tools
    }
  }
`

