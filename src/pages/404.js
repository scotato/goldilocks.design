import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Page = styled.h1`
  display: grid;
  place-content: center;
  height: 100%;
  color: ${props => props.theme.grayscale[500]};
`

export default () => (
  <Layout title="Not Found">
    <SEO />
    <Page>404</Page>
  </Layout>
)
