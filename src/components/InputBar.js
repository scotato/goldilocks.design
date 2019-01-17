import React from 'react'
import styled from 'styled-components'

import { ButtonIcon } from './Button'
import { AvatarUser } from './Avatar'
import Input from './Input'

const InputBar = styled.div`
  display: grid;
  padding: 0 2.5vh;
  grid-area: inputbar;
  grid-template-columns: 5vh 5vh 5vh auto 5vh;
  grid-template-rows: 5vh;
  place-content: center;
  justify-content: stretch;
  height: 10vh;
  font-size: 2.5vh;
  background-color: ${props => props.theme.colors.black[100]};
  grid-column-gap: 1.25vh;
  font-weight: 300;
  color: ${props => props.theme.colors.black[300]};
  border-bottom-left-radius: 5vh;
  border-bottom-right-radius: 5vh;
  pointer-events: auto;
  z-index: 1;
`

export default props => {
  return (
    <InputBar>
      <ButtonIcon icon='ellipsis-h' />
      <ButtonIcon icon='envelope' />
      <ButtonIcon icon='comment' isActive />
      <Input placeholder='message...' />
      <AvatarUser />
    </InputBar>
  )
}
