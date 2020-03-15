import React from 'react'
import styled from 'styled-components'

import NavigationToggle from './NavigationToggle'
import { DarkModeToggle } from '../components/DarkMode'

const Header = styled.header`
  position: fixed;
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  height: ${props => props.theme.size[900]};
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(64px);
  top: 0;
  width: 100%;
  max-width: ${props => props.theme.isNavigationOpen ? `calc(${props.theme.device.desktopLarge} - ${props.theme.device.phoneSmall})` : props.theme.device.desktopLarge};
  z-index: 5;
  line-height: 1;
  align-items: center;
  will-change: max-width, background-color;
  transition: max-width 0.2s ease-out, background-color 0.2s ease-out;

  @-moz-document url-prefix() {
    background-color: rgba(255, 255, 255, 0.99);
  }

  .dark-mode & {
    background-color: rgba(0, 0, 0, 0.25);

    @-moz-document url-prefix() {
      background-color: rgba(0, 0, 0, 0.99);
    }
  }

  ${props => props.theme.media.desktopLarge`
    max-width: ${props => props.theme.isNavigationOpen ? `calc(100% - ${props.theme.device.phoneSmall})` : '100%'};
  `}

  ${props => props.theme.media.tabletVertical`
    max-width: 100%;
  `}

  ${props => props.theme.media.phone`
    padding: ${props => props.theme.size[500]};
    font-size: ${props => props.theme.size[500]};
  `}
`

const Divider = styled.div`
  margin-top: ${props => props.theme.size[100]};
  height: ${props => props.theme.size[900]};
  border-bottom: ${props => props.theme.size[100]} solid ${props => props.theme.grayscale[100]};
  will-change: border-color;
  transition: border-color 0.2s ease-out;

  .dark-mode & {
    border-bottom: ${props => props.theme.size[100]} solid black;
  }
`

const Title = styled.div`
  padding: 0 ${props => props.theme.size[500]};
  justify-self: center;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  line-height: 1.1;
`

const IconsGroup = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.size[600]} ${props => props.theme.size[600]} ${props => props.theme.size[600]};
  grid-column-gap: ${props => props.theme.size[500]};
`

const Primary = styled(IconsGroup)``

const Secondary = styled(IconsGroup)`
  display: ${props => props.block ? 'block' : 'grid'};
  width: 92px;
  text-align: right;
  justify-self: flex-end;
`

export default props => (
  <>
    <Header>
      <Primary>
        {props.primary}
        <DarkModeToggle />
        <NavigationToggle />
      </Primary>
      <Title>{props.title}</Title>
      <Secondary block={props.secondaryBlock}>{props.secondary}</Secondary>
    </Header>
    <Divider />
  </>
)