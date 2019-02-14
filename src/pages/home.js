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

const HomePage = props => {
  const page = props.data.page.edges[0].node.frontmatter
  const apps = props.data.apps.edges

  return (
    <Layout page={page}>
      <Device page={page}>
        <Apps>
          {apps.map(edge => {
            const app = edge.node.frontmatter
            return (
              <AppIcon
                key={app.appId}
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
}

HomePage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape(PropTypes.object),
    page: PropTypes.shape({
      edges: PropTypes.array,
    }),
    apps: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query {
    page: allMarkdownRemark(filter: { frontmatter: { slug: { eq: "home" } } }) {
      edges {
        node {
          frontmatter {
            icon
            title
            color
            colorWeight
          }
        }
      }
    }
    apps: allMarkdownRemark(filter: { frontmatter: { appId: { gt: 0 } } }, sort: { fields: [frontmatter___appId] }) {
      edges {
        node {
          frontmatter {
            icon
            slug
            title
            color
            colorWeight
            appId
          }
        }
      }
    }
  }
`