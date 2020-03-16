import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Navigation from './Navigation'
import Social from './Social'

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
  padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  grid-template-rows: 1fr auto;
  grid-row-gap: ${props => props.theme.size[300]};
  width: ${props => props.theme.device.phoneSmall};
  background-color: ${props => props.theme.grayscale[100]};
  height: 100vh;
  z-index: 1;
  overflow-y: scroll;
  will-change: background-color;
  transition: background-color 0.2s ease-out;

  .dark-mode & {
    background-color: black;
  }

  ${props => props.theme.media.tabletVertical`
    display: ${props.isRoot ? 'grid' : 'none'};
    padding: ${props => props.theme.size[500]};
    width: 100%;
  `}
`

const Body = styled.main`
  position: relative;
  margin-left: ${props => props.theme.isNavigationOpen ? props.theme.device.phoneSmall : 0};
  background-color: white;
  z-index: 2;
  will-change: margin-left, background-color;
  transition: margin-left 0.2s ease-out, background-color 0.2s ease-out;

  ${props => props.theme.media.tabletVertical`
    display: ${props.isRoot ? 'none' : 'block'};
    margin-left: 0;
  `}

  .dark-mode & {
    background-color: ${props => props.theme.grayscale[900]};
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.size[900]};
  max-width: calc(${props => props.theme.device.desktop} - ${props => props.theme.device.phoneSmall});

  ${props => props.theme.media.phone`
    padding: ${props => props.theme.size[600]};
  `}

  ${props => props.theme.media.phoneSmall`
    padding: ${props => props.theme.size[500]};
  `}
`

export default props => (
  <Layout>
    <GlobalStyle />
    
    <Aside isRoot={props.isRoot}>
      <Navigation />
      <Social />
    </Aside>
    
    <Body isRoot={props.isRoot}>
      {props.children}
    </Body>
  </Layout>
)
