import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputBar = styled.div`
  display: grid;
  padding: 0 2.5vh;
  grid-area: inputbar;
  grid-template-columns: 5vh 5vh 5vh auto 5vh;
  grid-template-rows: 5vh;
  place-content: center;
  justify-content: stretch;
  /* align-self: stretch; */
  /* width: 100%; */
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

const Button = styled.button`
  display: flex;
  background-color: dodgerblue;
  border-radius: 2.5vh;
  cursor: pointer;
  border: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  height: 5vh;
  border-radius: 2.5vh;
  border: 0.25vh solid ${props => props.theme.colors.black[100]};
  min-width: 100%;
  justify-self: stretch;
  align-self: stretch;
`

const Icon = styled(FontAwesomeIcon)`
  color: white;
`

const AvatarUser = styled(FontAwesomeIcon).attrs({
  icon: 'user-circle'
})`
  color: ${props => props.theme.colors.black[200]};

  &.svg-inline--fa {
    width: 100%;
    height: 100%;
  }
`

export default props => {
  return (
    <InputBar>
      <Button>
       <Icon icon='ellipsis-h' />
      </Button>
      <Button>
       <Icon icon='envelope' />
      </Button>
      <Button>
       <Icon icon='comment' />
      </Button>
      <Input />
      <AvatarUser />
    </InputBar>
  )
}
