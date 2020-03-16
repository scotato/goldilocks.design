import React from 'react'
import styled, { css } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Navigation from './Navigation'
import Social from './Social'

const Layout = styled.div`
  display: grid;
  position: relative;
  margin: 0 auto;
  min-height: 100%;
  max-width: ${props => props.theme.device.desktopLarge};
  grid-template-areas: "aside body";
  box-shadow: 0 ${props => props.theme.size[200]} 0 ${props => props.theme.size[200]} ${props => props.theme.grayscale[100]};
  will-change: grid-template-columns, box-shadow;
  transition: grid-template-columns 0.2s ease-out, box-shadow 0.2s ease-out;

  ${props => props.theme.isNavigationOpen ? css`
    grid-template-columns: ${props.theme.device.phoneSmall} 1fr;
  ` : css`
    grid-template-columns: 0 1fr;
  `}

  ${props => props.theme.media.desktopLarge`
    max-width: 100vw;
  `}

  ${props => props.theme.media.tabletVertical`
    grid-template-columns: 0 1fr;
  `}

  .dark-mode & {
    box-shadow: 0 ${props => props.theme.size[200]} 0 ${props => props.theme.size[200]} ${props => props.theme.grayscale[900]};
  }
`

const AsideContainer = styled.aside`
  grid-area: aside;
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

const BodyContainer = styled.div`
  position: relative;
  background-color: white;
  z-index: 2;
  will-change: width, background-color;
  transition: width 0.2s ease-out, background-color 0.2s ease-out;
  grid-area: body;

  ${props => props.theme.media.tabletVertical`
    display: ${props.isRoot ? 'none' : 'block'};
  `}

  .dark-mode & {
    background-color: ${props => props.theme.grayscale[900]};
  }
`

const Body = styled.main`
  overflow-x: hidden;
`

export const Container = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.size[900]};
  max-width: calc(${props => props.theme.device.desktop} - ${props => props.theme.device.phoneSmall});
  will-change: max-width;
  transition: max-width 0.2s ease-out;

  ${props => props.theme.media.desktop`
    ${props.theme.isNavigationOpen ? css`
      max-width: calc(100vw - ${props => props.theme.device.phoneSmall});
    ` : css`
      max-width: 100vw;
    `}
  `}

  ${props => props.theme.media.tabletVertical`
    max-width: 100vw;
  `}

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
    
    <AsideContainer>
      <Aside isRoot={props.isRoot}>
        <Navigation />
        <Social />
      </Aside>
    </AsideContainer>
    
    <BodyContainer isRoot={props.isRoot}>
      <Header
        title={props.title}
        primary={props.headerPrimary}
        secondary={props.headerSecondary}
        secondaryBlock={props.headerSecondaryBlock}
      />

      <Body>
        {props.children}
      </Body>
    </BodyContainer>
  </Layout>
)
