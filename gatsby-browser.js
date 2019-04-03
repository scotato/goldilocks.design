import React from 'react'
import Page from './src/components/Page'

export const wrapPageElement = ({ props, element }) => (
  <Page {...props}>
    {element}
  </Page>
)
