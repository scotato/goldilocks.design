import React from 'react'
import { graphql } from 'gatsby'
import groupBy from 'lodash/groupBy'

import Layout, { Container } from '../components/Layout'
import Group from '../components/Group'
import Card from '../components/Card'
import Header from '../components/Header'
import { Back } from '../components/Link'
import Indicators from '../components/Indicators'

const ProjectsPage = ({ data }) => {
  const projects = data.projects.edges.map(project => project.node)
  const projectsByStatus = groupBy(projects, 'frontmatter.status')
  const statusOrder = [
    'production',
    'development',
    'prototype',
    'archived'
  ]

  return (
    <Layout>
      <Header
        title="Projects"
        primary={<Back to='/' />}
      />
      <Container>
        {statusOrder.map(status => (
          <Group title={status.replace('-', ' ')}>
            {projectsByStatus[status].map(project => (
              <Card
              to={project.fields.slug}
              key={project.fields.slug}
              badge={project.frontmatter.logo.childImageSharp.fluid}
              title={project.frontmatter.title}
              description={project.frontmatter.description}
              indicators={
                <Indicators
                  createdAt={project.github && project.github.createdAt}
                  updatedAt={project.github && project.github.updatedAt}
                  commits={project.github && project.github.commits}
                  version={project.github && project.github.version}
                />
              }
            />
            ))}
          </Group>
        ))}
      </Container>
    </Layout>
  )
}

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
      github {
        ...Repository
      }
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
