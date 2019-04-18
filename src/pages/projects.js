import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Card from '../components/Card'
import { AppBadge } from '../components/AppIcon'

const Projects = styled.div`
  display: grid;
  margin: 0 auto;
  width: ${props => props.theme.size[800]};
  grid-row-gap: ${props => props.theme.size[300]};
`

const Project = styled(Card)`
  flex: 1;
`
const ProjectImg = styled(Img)`
  flex: 1;
`

const GithubBadge = styled(AppBadge).attrs({
  icon: 'fa-github',
  color: 'black',
  colorWeight: 900
})``

const ProjectsPage = ({ data: { page, projects, goldilocksDesign }}) => (
  <Projects>
    {console.log(goldilocksDesign)}
    {projects.edges.map(({node: project}) => (
      <Project
        key={project.dateAdded}
        hero={<ProjectImg fluid={project.badge.childImageSharp.fluid} />}
        badge={<GithubBadge />}
        title={goldilocksDesign.repository.name}
        detail={goldilocksDesign.repository.description}
        date={goldilocksDesign.repository.pushedAt}
        to={goldilocksDesign.repository.url}
      />
    ))}
  </Projects>
)

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
    github: PropTypes.shape({
      edges: PropTypes.array,
    }),
    apps: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    page: appsYaml(id: {eq: "projects"}) {
      ...AppInfo
    }
    projects: allProjectsYaml {
      edges {
        node {
          badge {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    goldilocksDesign: github {
      repository(name: "goldilocks.design", owner: "scotato") {
        releases(last: 1) {
          edges {
            node {
              createdAt
              description
              id
              isDraft
              isPrerelease
              name
              publishedAt
              resourcePath
              tag {
                name
              }
              tagName
              updatedAt
              url
            }
          }
          totalCount
        }
        description
        homepageUrl
        id
        name
        url
        createdAt
        pushedAt
        updatedAt
      }
    }
  }
`
