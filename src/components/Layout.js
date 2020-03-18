import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { useWindowSize } from "@reach/window-size"

import { useClient, useNavigation } from '../hooks'
import GlobalStyle from './GlobalStyle'
import Navigation from './Navigation'
import Social from './Social'

const Layout = styled.div`
  display: grid;
  position: relative;
  margin: 0 auto;
  min-height: 100%;
  max-width: ${props => props.theme.device.desktopLarge};
  box-shadow: 0 ${props => props.theme.size[200]} 0 ${props => props.theme.size[200]} ${props => props.theme.grayscale[100]};

  ${props => props.theme.media.desktopLarge`
    max-width: 100vw;
  `}

  .dark-mode & {
    box-shadow: 0 ${props => props.theme.size[200]} 0 ${props => props.theme.size[200]} black;
  }
`

const Aside = styled.aside`
  display: ${props => props.isVisible ? 'grid' : 'none'};
  position: fixed;
  padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  grid-template-rows: 1fr auto;
  grid-row-gap: ${props => props.theme.size[300]};
  width: ${props => props.theme.device.phoneSmall};
  background-color: ${props => props.theme.grayscale[100]};
  height: 100vh;
  z-index: 1;
  overflow-y: scroll;
  justify-self: start;
  opacity: ${props => props.isHidden ? 0 : 1};
  will-change: opacity;
  transition: opacity 0.2s ease-in-out;

  .dark-mode & {
    background-color: black;
  }

  ${props => props.theme.media.tabletVertical`
    padding: ${props => props.theme.size[500]};
    width: 100%;
  `}
`

const BodyContainer = styled(animated.div)`
  position: relative;
  background-color: white;
  justify-self: end;
  width: 100%;
  z-index: 2;

  .dark-mode & {
    background-color: ${props => props.theme.grayscale[900]};
  }
`

export const Body = styled.main`
  overflow-x: hidden;
`

export default ({ children }) => {
  const isMounted = useClient()
  const navigation = useNavigation()
  const { width } = useWindowSize()
  
  const isMobile = width <= 768 // tablet vertical
  const widthMax = width > 1440 ? 1440 : width // desktop large
  const navOpenWidth = isMobile ? width : widthMax - 375 // phone small
  const bodyProps = useSpring({width: navigation.isOpen ? navOpenWidth : widthMax})
  const showAside = isMounted ? !isMobile : false
  const hideAside = isMounted ? !isMobile && !navigation.isOpen : false

  return (
    <Layout>
      <GlobalStyle />

      <Aside isVisible={showAside} isHidden={hideAside}>
        <Navigation />
        <Social />
      </Aside>

      <BodyContainer style={isMounted ? bodyProps : {}}>
        {children}
      </BodyContainer>
    </Layout>
  )
}
