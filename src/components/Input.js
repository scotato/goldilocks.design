import React from 'react'
import styled from 'styled-components'
import { rowStyle, Badge, Title, Detail } from './Row'

export function moveCursorToEnd(el) {
  if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length
  } else if (typeof el.createTextRange != "undefined") {
      el.focus()
      var range = el.createTextRange()
      range.collapse(false)
      range.select()
  }
}

const InputRow = styled.label`
  ${rowStyle}
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0;
  grid-template-columns: ${props => props.theme.size[700]} 1fr 2fr;

  &:last-child input {
    border-bottom-left-radius: ${props => props.theme.size[500]};
    border-bottom-right-radius: ${props => props.theme.size[500]};
  }
`

const Input = styled.input`
  position: absolute;
  margin: 0;
  padding: ${props => props.theme.size[500]};
  border: 0;
  border-bottom: ${props => props.theme.size[100]} solid ${props => props.theme.grayscale[300]};
  background-color: transparent;
  color: inherit;
  text-align: right;
  color: ${props => props.theme.grayscale[500]};
  width: 100%;
  height: 100%;
  z-index: 0;

  .dark-mode & {
    border-color: ${props => props.theme.grayscale[900]};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.color.info};
  }
`

export default props => (
  <InputRow onClick={props.onClick}>
    <Badge name={props.icon} size={600} />
    <Title>{props.title}</Title>
    <Detail />
    <Input {...props} />
  </InputRow>
)
