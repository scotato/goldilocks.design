import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import SEO from './SEO'
import Navigation from './Navigation'
import Social from './Social'
import theme from '../theme'

const Layout = styled.div`
  display: grid;
  margin: 0 auto;
  min-height: 100%;
  max-width: ${props => props.theme.device.desktopLarge};
  grid-template-columns: ${props => props.theme.device.phoneSmall} auto;
`

const Aside = styled.aside`
  display: grid;
  padding: ${props => props.theme.size[700]};
  grid-template-rows: auto 1fr auto;
  grid-row-gap: ${props => props.theme.size[300]};
  background-color: ${props => props.theme.grayscale[100]};
`

const AsideTitle = styled.h1`
  margin-bottom: ${props => props.theme.size[700]};
`

const Body = styled.main`
  display: grid;
  padding: ${props => props.theme.size[700]};
  border-radius: ${props => props.theme.size[700]};
`

export default props => (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO />
        
        <Aside>
          <AsideTitle>Goldilocks Design</AsideTitle>
          <Navigation />
          <Social />
        </Aside>
        
        <Body>
          {props.children}
        </Body>
      </Layout>
    </ThemeProvider>
  )
