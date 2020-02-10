import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  height: ${props => props.theme.size[900]};
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(64px);
  top: 0;
  width: 100%;
  max-width: ${props => `calc(${props.theme.device.desktopLarge} - ${props.theme.device.phoneSmall})`};
  z-index: 2;
  line-height: 1;
  align-items: center;

  .dark-mode & {
    background-color: rgba(0, 0, 0, 0.25);
  }

  ${props => props.theme.media.desktopLarge`
    max-width: ${props => `calc(100% - ${props.theme.device.phoneSmall})`};
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
`

const Primary = styled.div``

const Secondary = styled.div`
  display: flex;
  justify-self: flex-end;

  a:not(:first-child) {
    margin-left: ${props => props.theme.size[500]};
  }
`

export default props => {
  return (
    <>
      <Header>
        <Primary>{props.primary}</Primary>
        <Title>{props.title}</Title>
        <Secondary>{props.secondary}</Secondary>
      </Header>
      <Divider />
    </>
  )
}