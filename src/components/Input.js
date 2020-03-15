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
  will-change: box-shadow;
  transition: box-shadow 0.2s ease-out;

  ${props => props.isFocused && css`
    outline: none;
    box-shadow: 0 0 0 ${props => props.theme.size[100]} ${props => props.theme.color.primary};
  `}
`

const InputBadge = styled(Badge)`
  will-change: color;
  transition: color 0.2s ease-in;
  
  ${props => props.isFocused && css`
    color: ${props.theme.color.info};
  `}

  .dark-mode & {
    ${props => props.isFocused && css`
      color: ${props.theme.color.info};
    `}
  }
`

const Input = styled.input`
  margin: 0;
  padding: 0;
  background-color: transparent;
  text-align: right;
  color: ${props => props.theme.grayscale[500]};
  grid-area: detail;
  border: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  will-change: border-color;
  transition: border-color 0.2s ease-in;

  .dark-mode & {
    border-color: ${props => props.theme.grayscale[900]};
  }

  &:focus {
    outline: none;
  }
`

const SearchRow = styled(InputRow)`
  padding: ${props => props.theme.size[200]} ${props => props.theme.size[500]};
  margin-bottom: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[600]};
  background-color: ${props => props.theme.grayscale[200]};
  grid-template-columns: ${props => props.theme.size[700]} 1fr;
  grid-template-areas: "badge detail";
  will-change: color, background-color;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;

  input {
    color: ${props => props.theme.grayscale[900]};
    text-align: left;
    will-change: color;
    transition: color 0.2s ease-out;

    &::placeholder {
      color: ${props => props.theme.grayscale[400]};
      will-change: color;
      transition: color 0.2s ease-out;
    }
  }

  .dark-mode & {
    color: ${props => props.theme.grayscale[400]};
    background-color: ${props => props.theme.grayscale[800]};

    input {
      color: ${props => props.theme.grayscale[200]};
      text-align: left;

      &::placeholder {
        color: ${props => props.theme.grayscale[700]};
      }
    }
  }
`

const checkFocus = ref => document.activeElement === ref.current

export const Search = ({className, ...props}) => {
  const input = useRef(null)
  const [isFocused, setIsFocused] = useState()

  return (
    <SearchRow onClick={props.onClick} isFocused={isFocused} for="search" className={className}>
      <InputBadge name="search" size={500} isFocused={isFocused} />
      <Input
        id="Search"
        ref={input}
        onFocus={() => setIsFocused(checkFocus(input))}
        onBlur={() => setIsFocused(checkFocus(input))}
        name="search"
        type="search"
        placeholder="Search..."
        maxLength={30}
        {...props}
      />
    </SearchRow>
  )
}

export default ({className, ...props}) => {
  const input = useRef(null)
  const [isFocused, setIsFocused] = useState()

  return (
    <InputRow onClick={props.onClick} isFocused={isFocused} for={props.name} className={className}>
      <InputBadge name={props.icon} size={600} isFocused={isFocused} />
      <Title>{props.title}</Title>
      <Input
        id={props.name}
        ref={input}
        onFocus={() => setIsFocused(checkFocus(input))}
        onBlur={() => setIsFocused(checkFocus(input))}
        {...props}
      />
    </InputRow>
  )
}
