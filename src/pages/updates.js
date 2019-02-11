import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Notification from '../components/Notification'

const Notifications = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const notifications = [
  {
    title: 'Design Systems',
    detail: 'Blog',
    date: '2019-02-11',
    to: '/blog/design-systems',
    icon: 'blog',
    color: 'yellow',
    colorWeight: 500
  }, {
    title: 'Goldilocks Design',
    detail: 'Projects',
    date: '2019-01-10',
    to: '/projects/goldilocks-design',
    icon: 'projects',
    color: 'blue',
    colorWeight: 500
  }, {
    title: 'Gatsby',
    detail: 'Tools',
    date: '2017-01-09',
    to: '/tools/gatsby',
    icon: 'tools',
    color: 'orange',
    colorWeight: 500
  }
]

const UpdatesPage = props => {
  const page = props.data.page.edges[0].node.frontmatter

  return (
    <Layout page={page}>
      <Device page={page} shouldShowNav>
        <Notifications>
          {notifications.map(notification => (
            <Notification key={notification.date} {...notification} />
          ))}
        </Notifications>
      </Device>
    </Layout>
  )
}

UpdatesPage.propTypes = {
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

export default UpdatesPage

export const pageQuery = graphql`
  query {
    page: allMarkdownRemark(filter: { frontmatter: { slug: { eq: "updates" } } }) {
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
  }
`