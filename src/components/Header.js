import React from 'react'
import styled from 'styled-components'

import NavigationToggle from './NavigationToggle'
import { DarkModeToggle } from '../components/DarkMode'

const Header = styled.header`
  position: sticky;
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  height: ${props => props.theme.size[900]};
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(64px);
  top: 0;
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

  ${props => props.theme.media.phone`
    padding: ${props => props.theme.size[500]};
    font-size: ${props => props.theme.size[500]};
  `}
`

const HeaderDivider = styled.div`
  position: absolute;
  top: 0;
  display: grid;
  height: ${props => props.theme.size[900]};
  width: 100%;
  border-bottom: ${props => props.theme.size[100]} solid ${props => props.theme.grayscale[100]};
  will-change: border-color;
  transition: border-color 0.2s ease-out;
  box-sizing: content-box;

  .dark-mode & {
    border-bottom: ${props => props.theme.size[100]} solid black;
  }
`

const Title = styled.div`
  padding: 0 ${props => props.theme.size[300]};
  justify-self: center;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 100%;
  max-width: 100%;
  text-align: center;
  line-height: 1.2;
`

const IconsGroup = styled.div`
  display: grid;
  grid-auto-columns: ${props => props.theme.size[600]};
  grid-column-gap: ${props => props.theme.size[500]};
  grid-auto-flow: column;
  font-size: ${props => props.theme.size[600]};
  width: 92px;

  ${props => props.theme.media.phoneSmall`
    grid-auto-columns: ${props => props.theme.size[500]};
    grid-column-gap: ${props => props.theme.size[400]};
    font-size: ${props => props.theme.size[500]};
    width: 72px;
  `}
`

const Primary = styled(IconsGroup)``

const Secondary = styled(IconsGroup)`
  display: ${props => props.block ? 'flex' : 'grid'};
  text-align: right;
  justify-self: flex-end;
  justify-content: flex-end;
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
    <HeaderDivider />
  </>
)
