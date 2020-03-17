import React from 'react'
import styled from 'styled-components'

import SEO from '../components/SEO'
import Header from '../components/Header'
import { Body } from '../components/Layout'

const Page = styled.h1`
  display: grid;
  place-content: center;
  height: 100%;
  color: ${props => props.theme.grayscale[500]};
`

export default () => (
  <>
    <Header title="Not Found" />
    <SEO />
    <Body>
      <Page>404</Page>
    </Body>
  </>
)
