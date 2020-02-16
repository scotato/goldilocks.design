import React from 'react'
import { graphql } from 'gatsby'
import groupBy from 'lodash/groupBy'

import Layout, { Container } from '../components/Layout'
import Group from '../components/Group'
import Card from '../components/Card'
import Header from '../components/Header'
import { Back } from '../components/Link'
import RepositoryIndicators from '../components/RepositoryIndicators'

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
                <RepositoryIndicators
                  createdAt={project.frontmatter.github && project.frontmatter.github.createdAt}
                  updatedAt={project.frontmatter.github && project.frontmatter.github.updatedAt}
                  commits={project.frontmatter.github && project.frontmatter.github.commits}
                  version={project.frontmatter.github && project.frontmatter.github.version}
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

export const pageQuery = graphql`
  query {
    projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
        sort: { fields: [frontmatter___github___updatedAt, frontmatter___github___commits], order: DESC }
      ) {
        edges {
          node {
            ...Project
            frontmatter {
              ...ProjectFrontmatter
              ...Collections
            }
          }
        }
    }
  }
`
