import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'


const MusicPage = ({ data: { page }}) => (
  <Layout page={page}>
    <Device page={page} shouldShowNav />
  </Layout>
)

MusicPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
  }),
}

export default MusicPage

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "music" }) {
      ...AppInfo
    }
  }
`
