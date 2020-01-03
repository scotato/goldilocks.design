import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Apps } from '../components/AppIcon'
import Link from '../components/Link'

const ProjectBadge = styled(Link)`
  width: ${props => props.theme.size[600]};
  margin: ${props => props.theme.size[250]} ${props => props.theme.size[200]};
  color: ${props => props.theme.colors.black[500]};
  font-size: ${props => props.theme.size[300]};
  text-align: center;
  line-height: 1.25;

  &:hover {
    color: ${props => props.theme.colors.black[500]};
  }
`

const ProjectBadgeImage = styled(Img)`
  margin-bottom: ${props => props.theme.size[250]};
  width: ${props => props.theme.size[600]};
  height: ${props => props.theme.size[600]};
  border-radius: ${props => props.theme.size[400]};
`

const ProjectsPage = ({ data: { projects }}) => (
  <Apps>
    {projects.edges.map(({node: project}) => (
      <ProjectBadge to={project.fields.slug} key={project.title}>
        <ProjectBadgeImage fluid={project.frontmatter.badge.childImageSharp.fluid} />
        {project.frontmatter.title}
      </ProjectBadge>
    ))}
  </Apps>
)

export default ProjectsPage

export const query = graphql`
  fragment Project on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
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
