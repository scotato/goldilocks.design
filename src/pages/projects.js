import React from 'react'
import { graphql } from 'gatsby'
import groupBy from 'lodash/groupBy'

import SEO from '../components/SEO'
import Header from '../components/Header'
import { Body } from '../components/Layout'
import Container from '../components/Container'
import Group from '../components/Group'
import Card from '../components/Card'
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
    <>
      <SEO />
      <Header title="Projects" primary={<Back to='/' />} />
      <Body>
        <Container>
          {statusOrder.map(status => (
            <Group title={status.replace('-', ' ')}>
              {projectsByStatus[status].map(({
                fields: { slug },
                frontmatter: { title, description, github, logo }
              }) => (
                <Card
                  to={slug}
                  key={slug}
                  badge={logo.childImageSharp.fluid}
                  title={title}
                  description={description}
                  indicators={
                    <RepositoryIndicators
                      updatedAt={github && github.committedAt}
                      commits={github && github.commits}
                      version={github && github.version}
                    />
                  }
                />
              ))}
            </Group>
          ))}
        </Container>
      </Body>
    </>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    projects: allMdx(
        filter: { fields: { collection: { eq: "projects" } } }
        sort: { fields: [frontmatter___github___committedAt, frontmatter___github___createdAt], order: DESC }
      ) {
        edges {
          node {
            ...Project
            frontmatter {
              ...ProjectFrontmatter
            }
          }
        }
    }
  }
`
