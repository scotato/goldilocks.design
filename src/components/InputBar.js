import React from 'react'
import styled from 'styled-components'

const InputBar = styled.div`
  display: grid;
  grid-area: inputbar;
  padding: 0 2.5vh;
  grid-template-columns: 5vh 5vh 5vh 5vh auto 5vh;
  justify-items: center;
  align-items: center;
  height: 10vh;
  font-size: 2.5vh;
  background-color: white;
  border-top: 0.25vh solid ${props => props.theme.colors.black[100]};
  grid-column-gap: 1.25vh;
  font-weight: 300;
  color: ${props => props.theme.colors.black[300]};
  border-bottom-left-radius: 5vh;
  border-bottom-right-radius: 5vh;
  pointer-events: auto;
  z-index: 1;
`

const Button = styled.button`
  width: 5vh;
  height: 5vh;
  background-color: ${props => props.theme.colors.black[100]};
  border-radius: 2.5vh;
  cursor: pointer;
  border: 0;
  padding: 0;
`

const Input = styled.input`
  height: 5vh;
  border-radius: 2.5vh;
  border: 0.25vh solid ${props => props.theme.colors.black[100]};
  width: 100%;
`

export default props => {
  return (
    <InputBar>
      <Button />
      <Button />
      <Button />
      <Button />
      <Input />
      <Button />
    </InputBar>
  )
}
