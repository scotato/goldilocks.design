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
  position: relative;
  margin: 0 auto;
  min-height: 100%;
  max-width: ${props => props.theme.device.desktopLarge};
`

const Aside = styled.aside`
  display: grid;
  position: fixed;
  padding: ${props => props.theme.size[700]};
  grid-template-rows: 1fr auto;
  grid-row-gap: ${props => props.theme.size[300]};
  width: ${props => props.theme.device.phoneSmall};
  min-height: 100vh;
  z-index: 2;

  ${props => props.theme.media.tabletVertical`
    display: ${props.theme.isRoot ? 'grid' : 'none'};
    padding: ${props => props.theme.size[500]};
    width: 100%;
  `}
`

const Body = styled.main`
  position: relative;
  margin-left: ${props => props.theme.device.phoneSmall};
  background-color: ${props => props.theme.isDarkMode ? props.theme.grayscale[900] : 'white'};
  overflow: hidden;

  ${props => props.theme.media.tabletVertical`
    display: ${props.theme.isRoot ? 'none' : 'block'};
    margin-left: 0;
  `}
`

export const Container = styled.div`
  margin: 0 ${props => props.theme.size[900]};
  padding: ${props => props.theme.size[700]} ${props => props.theme.size[900]};

  ${props => props.theme.media.tabletHorizontal`
    margin: 0 ${props => props.theme.size[700]};
    padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  `}

  ${props => props.theme.media.phone`
    margin: 0;
    padding: ${props => props.theme.size[500]};
  `}
`

export default props => {
  const darkMode = useDarkMode()
  const state = { isDarkMode: darkMode.value, isRoot: props.isRoot }

  return (
    <ThemeProvider theme={{ ...theme, ...state}}>
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
