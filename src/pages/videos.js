import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'


const VideosPage = ({ data: { page }}) => (
  <Layout page={page}>
    <Device page={page} shouldShowNav />
  </Layout>
)

VideosPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
  }),
}

export default VideosPage

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "updates" }) {
      ...AppInfo
    }
  }
`