import React from 'react'

import { PageBrowser } from './src/components/Page'

export const wrapPageElement = ({ props, element }) => (
  <PageBrowser {...props}>{element}</PageBrowser>
)