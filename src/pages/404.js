import React from 'react'
import { graphql } from 'gatsby'

export default () => <h1>404</h1>

export const pageQuery = graphql`
  query {
    page: screensYaml(id: { eq: "404" }) {
      ...ScreenInfo
    }
  }
`