import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  height: ${props => props.theme.size[900]};
  background-color: ${props => props.theme.isDarkMode ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.25)'};
  backdrop-filter: blur(64px);
  top: 0;
  width: 100%;
  max-width: ${props => `calc(${props.theme.device.desktopLarge} - ${props.theme.device.phoneSmall})`};
  z-index: 2;
  line-height: 1;
  align-items: center;

  ${props => props.theme.media.desktopLarge`
    max-width: ${props => `calc(100% - ${props.theme.device.phoneSmall})`};
  `}
`

const Divider = styled.div`
  margin-top: ${props => props.theme.size[100]};
  height: ${props => props.theme.size[900]};
  border-bottom: ${({ theme }) => `${theme.size[100]} solid ${theme.isDarkMode ? 'black' : theme.grayscale[100]}`};
`

const Title = styled.div`
  justify-self: center;
  font-weight: 500;
`

const Primary = styled.div``

const Secondary = styled.div`
  display: grid;
  justify-self: flex-end;
  grid-template-columns: auto auto auto;
  grid-column-gap: ${props => props.theme.size[400]};
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