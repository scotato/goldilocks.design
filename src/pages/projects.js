import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Card, { Cards } from '../components/Card'

const ProjectsPage = ({ data: { projects }}) => (
  <Cards>
    {projects.edges.map(({node: project}) => (
      <Card
        key={project.dateAdded}
        badge={<Img fluid={project.frontmatter.badge.childImageSharp.fluid} />}
        title={project.frontmatter.title}
        detail={project.frontmatter.description}
        date={project.frontmatter.createdAt}
        to={project.fields.slug}
      />
    ))}
  </Cards>
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
        sort: { fields: [frontmatter___date], order: DESC }
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
