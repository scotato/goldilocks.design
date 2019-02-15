import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'


const MessagesPage = ({ data: { page }}) => (
  <Layout page={page}>
    <Device page={page} shouldShowNav />
  </Layout>
)

MessagesPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
  }),
}

export default MessagesPage

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "messages" }) {
      ...AppInfo
    }
  }
`
