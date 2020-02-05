import React from 'react'
import moment from 'moment'
import { graphql } from 'gatsby'
import { Container } from '../components/Layout'
import LinkRow from '../components/LinkRow'
import Header from '../components/Header'
import { Back } from '../components/Link'

const ProjectsPage = ({ data: { projects } }) => (
  <>
    <Header
      title="Projects"
      primary={<Back to='/' />}
    />
    <Container>
      {console.log(projects.edges.filter(({node: project}) => !project.frontmatter.logo))}
      {projects.edges.map(({node: project}) => (
        <LinkRow
          to={project.fields.slug}
          key={project.fields.slug}
          badge={project.frontmatter.logo.childImageSharp.fluid}
          title={project.frontmatter.title}
          description={project.frontmatter.description}
          detail={moment(project.frontmatter.createdAt).format("MMM YYYY")}
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
    }
  }
`

export const pageQuery = graphql`
  query {
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
