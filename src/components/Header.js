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
  left: ${props => props.theme.device.phoneSmall};
  right: 0;
  z-index: 2;
  line-height: 1;
  align-items: center;
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
  justify-self: flex-end;
`

export default props => {
  return (
    <>
      <Header>
        <Primary />
        <Title>{props.title}</Title>
        <Secondary>{props.actions}</Secondary>
      </Header>
      <Divider />
    </>
  )
}