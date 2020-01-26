import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Link from '../components/Link'
import Icon from '../components/Icon'

const Projects = styled.div`
  padding: ${props => props.theme.size[900]};
`

const Project = styled(Link)`
  display: grid;
  margin-bottom: ${props => props.theme.size[500]};
  margin-left: ${props => props.theme.size[900]};
  margin-right: ${props => props.theme.size[900]};
  padding: ${props => props.theme.size[500]};
  background-color: ${props => props.theme.grayscale[100]};
  border-radius: ${props => props.theme.size[500]};
  grid-template-areas: 
    "badge title detail arrow"
    "badge description detail arrow";
  grid-template-columns: ${props => props.theme.size[900]} auto auto ${props => props.theme.size[600]};
  grid-template-rows: ${props => props.theme.size[700]} ${props => props.theme.size[700]};
  grid-column-gap: ${props => props.theme.size[500]};
  color: inherit;

  &:hover {
    color: inherit;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Badge = styled(Img)`
  width: ${props => props.theme.size[900]};
  height: ${props => props.theme.size[900]};
  border-radius: ${props => props.theme.size[400]};
  grid-area: badge;
`

const Title = styled.span`
  grid-area: title;
  font-weight: 700;
`

const Description = styled.span`
  grid-area: description;
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[500]};
`

const Detail = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: detail;
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[500]};
`

const Arrow = styled(Icon).attrs({
  name: 'chevron-right',
  size: 600
})`
  margin: auto 0;
  grid-area: arrow;
  color: ${props => props.theme.grayscale[400]};
`

const ProjectsPage = ({ data: { projects }}) => (
  <Projects>
    {projects.edges.map(({node: project}) => (
      <Project to={project.fields.slug}>
        <Badge fluid={project.frontmatter.badge.childImageSharp.fluid} />
        <Title>{project.frontmatter.title}</Title>
        <Description>{project.frontmatter.description}</Description>
        <Detail>{moment(project.frontmatter.createdAt).format("MMM YYYY")}</Detail>
        <Arrow />
      </Project>
    ))}
  </Projects>
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
