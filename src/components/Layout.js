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
  will-change: grid-template-columns, box-shadow;
  transition: grid-template-columns 0.2s ease-out, box-shadow 0.2s ease-out;
  justify-content: end;

  ${props => props.theme.media.desktopLarge`
    max-width: 100vw;
  `}

  .dark-mode & {
    box-shadow: 0 ${props => props.theme.size[200]} 0 ${props => props.theme.size[200]} black;
  }
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
  justify-self: start;

  .dark-mode & {
    background-color: black;
  }

  ${props => props.theme.media.tabletVertical`
    padding: ${props => props.theme.size[500]};
    width: 100%;
  `}
`

const BodyContainer = styled.div`
  position: relative;
  background-color: white;
  z-index: 2;
  will-change: background-color;
  transition: background-color 0.2s ease-out;

  ${props => props.theme.media.tabletVertical`
    display: ${props.isRoot ? 'none' : 'block'};
  `}

  .dark-mode & {
    background-color: ${props => props.theme.grayscale[900]};
  }
`

export const Body = styled.main`
  overflow-x: hidden;
  will-change: background-color;
  transition: background-color 0.2s ease-out;
`

export default ({ path, children }) => {
  const isMounted = useClient()
  const navigation = useNavigation()
  const isRoot = path === '/'
  const { width } = useWindowSize()
  const widthMax = width > 1440 ? 1440 : width
  const navOpenWidth = width <= 768 ? width : widthMax - 375
  const props = useSpring({width: navigation.isOpen ? navOpenWidth : widthMax})

  return (
    <Layout>
      <GlobalStyle />
      
      <Aside>
        <Navigation />
        <Social />
      </Aside>
      
      <BodyContainer isRoot={isRoot}>
        <animated.div style={props}>
          {children}
        </animated.div>
      </BodyContainer>
    </Layout>
  )
}
