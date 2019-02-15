import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import AppIcon from '../components/AppIcon'

const Apps = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-self: center;
`

const HomePage = ({data: { page, apps }}) => (
  <Layout page={page}>
    <Device page={page}>
      <Apps>
        {apps.edges.map(edge => {
          const app = edge.node
          return (
            <AppIcon
              key={app.id}
              title={app.title}
              icon={app.icon}
              to={app.slug}
              color={app.color}
              colorWeight={app.colorWeight}
            />
          )
        })}
      </Apps>
    </Device>
  </Layout>
)

HomePage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
    apps: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query {
    page: screensYaml(id: { eq: "home" }) {
      ...ScreenInfo
    }
    apps: allAppsYaml {
      edges {
        node {
          ...AppInfo
        }
      }
    }
  }
`