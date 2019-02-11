import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Network from '../components/Network'
import Icon from '../components/Icon'
import AppIcon from '../components/AppIcon'

const Apps = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const HomePage = props => {
  const page = props.data.page.edges[0].node.frontmatter
  const apps = props.data.apps.edges

  return (
    <Layout
      location={props.location}
      title={props.data.site.siteMetadata.title}
    >
      <Device
        headerNav={<Network />}
        headerIcon={<Icon name={page.icon} />}
        color={page.color}
        colorWeight={page.colorWeight}
        lockAction={() => props.navigate(props.location.pathname === '/' ? '/home' : '/')}
      >
        <Apps>
          {apps.map(edge => {
            const app = edge.node.frontmatter
            return (
              <AppIcon
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
    site {
      siteMetadata {
        title
      }
    }
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
    apps: allMarkdownRemark(filter: { frontmatter: { appId: { gt: 0 } } }) {
      edges {
        node {
          frontmatter {
            icon
            slug
            title
            color
            colorWeight
          }
        }
      }
    }
  }
`