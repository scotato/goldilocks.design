import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import { Back } from '../components/Link'
import ProjectIndicators from '../components/ProjectIndicators'

const ProjectsPage = ({ data: { projects } }) => (
  <>
    <Header
      title="Projects"
      primary={<Back to='/' />}
    />
    <Container>
      {projects.edges.map(({node: project}) => (
        <Card
          to={project.fields.slug}
          key={project.fields.slug}
          badge={project.frontmatter.logo.childImageSharp.fluid}
          title={project.frontmatter.title}
          description={project.frontmatter.description}
          indicators={<ProjectIndicators project={project.frontmatter} />}
        />
      ))}
    </Container>
  </>
)

export default ProjectsPage

export const query = graphql`
  fragment Project on MarkdownRemark {
    id
    html
    fields {
      slug
    }
    frontmatter {
      id
      author
      title
      description
      createdAt
      updatedAt
      commits
      version
      status
      date
      twitter
      github
      website
      isSourcePublic
      isProjectPublic
      isProjectActive
      isWebsiteActive
      projects
      posts
      tools
      galleryIsPhone
      gallery {
        description
        img {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      badge {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo {
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
    projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
        sort: { fields: [frontmatter___updatedAt, frontmatter___commits], order: DESC }
      ) {
        edges {
          node {
            ...Project
          }
        }
    }
  }
`
