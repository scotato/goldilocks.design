import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

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
  grid-template-rows: 1fr auto;
  grid-row-gap: ${props => props.theme.size[300]};
`

const Body = styled.main`
  background-color: ${props => props.theme.isDarkMode ? props.theme.grayscale[900] : 'white'};
`

export const Container = styled.div`
  margin: 0 ${props => props.theme.size[900]};
  padding: ${props => props.theme.size[700]} ${props => props.theme.size[900]};
`

export default props => {
  const darkMode = useDarkMode()

  return (
    <ThemeProvider theme={{...theme, isDarkMode: darkMode.value}}>
      <Layout>
        <GlobalStyle />
        <SEO />
        
        <Aside>
          <Navigation />
          <Social />
        </Aside>
        
        <Body>
          {props.children}
        </Body>
      </Layout>
    </ThemeProvider>
  )
}