import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Card, { Cards } from '../components/Card'

const ProjectsPage = ({ data: { projects, goldilocksDesign }}) => (
  <Cards>
    {console.log(goldilocksDesign)}
    {projects.edges.map(({node: project}) => (
      <Card
        key={project.dateAdded}
        badge={<Img fluid={project.frontmatter.badge.childImageSharp.fluid} />}
        title={goldilocksDesign.repository.name}
        detail={goldilocksDesign.repository.description}
        date={goldilocksDesign.repository.pushedAt}
        to={project.fields.slug}
      />
    ))}
  </Cards>
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

export const query = graphql`
  fragment Project on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
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
