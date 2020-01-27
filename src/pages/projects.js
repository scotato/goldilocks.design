import React from 'react'
import moment from 'moment'
import { graphql } from 'gatsby'
import LinkRow, { Container } from '../components/LinkRow'

const ProjectsPage = ({ data: { projects }}) => (
  <Container>
    {projects.edges.map(({node: project}) => (
      <LinkRow
        to={project.fields.slug}
        key={project.fields.slug}
        badge={project.frontmatter.badge.childImageSharp.fluid}
        title={project.frontmatter.title}
        description={project.frontmatter.description}
        detail={moment(project.frontmatter.createdAt).format("MMM YYYY")}
      />
    ))}
  </Container>
)

export default ProjectsPage

export const query = graphql`
  fragment Project on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
      description
      createdAt
      badge {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "projects" }) {
      ...AppInfo
    }
    projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
        sort: { fields: [frontmatter___updatedAt, frontmatter___commits], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            ...Project
          }
        }
    }
  }
`
