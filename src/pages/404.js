import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: not found" />
    <h1>404</h1>
    <p>what exactly where you looking for... <span role="img" aria-label="thinking">🤔</span></p>
  </Layout>
)

export default NotFoundPage
