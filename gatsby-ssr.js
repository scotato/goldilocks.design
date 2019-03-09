import React from 'react'
import { ServerStyleSheet } from 'styled-components'

import Page from './src/components/Page'

export const replaceRenderer = ({
  setHeadComponents,
}) => {
  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet()
  const styleElement = sheet.getStyleElement()
  setHeadComponents(styleElement)
}

export const wrapPageElement = ({ element, props }) => (
  <Page {...props}>{element}</Page>
)
