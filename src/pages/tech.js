import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Card, { Cards } from '../components/Card'

const ToolsPage = ({ data: { page, tools }}) => (
  <Layout page={page}>
    <Device page={page} shouldShowNav>
      <Cards>
        {tools.edges.map(({node: tool}) => (
          <Card
            key={tool.id}
            // badge={<AppBadge {...tool.app} />}
            title={tool.title}
            // detail={tool.description}
            // date={tool.dateAdded}
            to={`/`}
          />
        ))}
      </Cards>
    </Device>
  </Layout>
)

ToolsPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
  }),
}

export default ToolsPage

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "tech" }) {
      ...AppInfo
    }
    tools: allToolsYaml {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`