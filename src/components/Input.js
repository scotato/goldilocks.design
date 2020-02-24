import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { rowStyle, Badge, Title } from './Row'

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
  grid-template-columns: ${props => props.theme.size[700]} 1fr 2fr;
`

const InputBadge = styled(Badge)`
  will-change: color;
  transition: color 0.2s ease-in;
  ${props => props.isFocused && css`
    color: ${props.theme.color.info};
  `}
`

const Input = styled.input`
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: inherit;
  text-align: right;
  color: ${props => props.theme.grayscale[500]};
  grid-area: detail;
  border: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  .dark-mode & {
    border-color: ${props => props.theme.grayscale[900]};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.color.info};
  }
`

const checkFocus = ref => document.activeElement === ref.current

export default props => {
  const input = useRef(null)
  const [isFocused, setIsFocused] = useState()

  return (
    <InputRow onClick={props.onClick}>
      <InputBadge name={props.icon} size={600} isFocused={isFocused} />
      <Title>{props.title}</Title>
      <Input
        ref={input}
        onFocus={() => setIsFocused(checkFocus(input))}
        onBlur={() => setIsFocused(checkFocus(input))}
        {...props}
      />
    </InputRow>
  )
}
