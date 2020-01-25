import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Layout from './src/components/Layout'

export const replaceRenderer = ({
  setHeadComponents,
}) => {
  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet()
  const styleElement = sheet.getStyleElement()
  setHeadComponents(styleElement)
}

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
