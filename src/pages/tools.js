import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'


const ToolsPage = props => {
  const page = props.data.page.edges[0].node.frontmatter

  return (
    <Layout page={page}>
      <Device page={page}>
        {page.title}
      </Device>
    </Layout>
  )
}

ToolsPage.propTypes = {
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

export default ToolsPage

export const pageQuery = graphql`
  query {
    page: allMarkdownRemark(filter: { frontmatter: { slug: { eq: "tools" } } }) {
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