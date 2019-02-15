import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Card from '../components/Card'
import { AppBadge } from '../components/AppIcon'

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: center;
  width: ${props => props.theme.size.layout[800]};
`

const UpdatesPage = ({ data: { page, projects }}) => (
  <Layout page={page}>
    <Device page={page} shouldShowNav>
      <Cards>
        {projects.edges.map(({node: project}) => (
          <Card
            key={project.id}
            badge={<AppBadge {...project.app} />}
            title={project.title}
            detail={project.description}
            date={project.dateAdded}
            to={`/${project.app.id}`}
          />
        ))}
      </Cards>
    </Device>
  </Layout>
)

UpdatesPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
  }),
}

export default UpdatesPage

export const query = graphql`
  fragment AppInfo on AppsYaml {
    id
    icon
    slug
    title
    color
    colorWeight
  }
`

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "updates" }) {
      ...AppInfo
    }
    projects: allProjectsYaml {
      edges {
        node {
          id
          title
          description
          app {
            ...AppInfo
          }
        }
      }
    }
  }
`
