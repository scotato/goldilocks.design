import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const HomePage = props => (
  <Layout data={props.data}>
    {/* {props.data.apps.edges.map(({node: app}) => app.title)} */}
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query {
    page: screensYaml(id: { eq: "home" }) {
      ...ScreenInfo
    }
  }
`