import React from 'react'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ props, element }) => (
  <Layout {...props}>
    {element}
  </Layout>
)