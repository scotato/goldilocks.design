import React from 'react'
import styled, { css } from 'styled-components'

import GlobalStyle from './GlobalStyle'
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
    box-shadow: 0 ${props => props.theme.size[200]} 0 ${props => props.theme.size[200]} black;
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
  will-change: width, background-color;
  transition: width 0.2s ease-out, background-color 0.2s ease-out;

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

export const Body = styled.main`
  overflow-x: hidden;
  will-change: width, background-color;
  transition: width 0.2s ease-out, background-color 0.2s ease-out;
`

export default ({ path, children }) => {
  const isRoot = path === '/'
  
  return (
    <Layout>
      <GlobalStyle />
      
      <AsideContainer>
        <Aside isRoot={isRoot}>
          <Navigation />
          <Social />
        </Aside>
      </AsideContainer>
      
      <BodyContainer isRoot={isRoot}>
        {children}
      </BodyContainer>
    </Layout>
  )
}
