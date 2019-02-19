import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ButtonBase = styled.button`
  display: flex;  
  padding: 0;
  border: 0;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
`

const Button = styled(ButtonBase).attrs({
  disabled: props => props.isActive
})`
  color: ${props => props.color || (props.isActive ? 'white' : props.theme.colors.black[600])};
  background-color: ${props => props.backgroundColor || (props.isActive ? 'dodgerblue' : props.theme.colors.black[200])};
  border-radius: ${props => props.theme.size.layout[400]};
  cursor: ${props => props.isActive ? 'default' : 'pointer'};
  transition: box-shadow 0.1s ease-out;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px dodgerblue;
  }
`

export const ButtonLink = styled(Link)`
  display: flex;
  padding: 0.75em 1.5em;
  border-radius: ${props => props.theme.size.layout[400]};
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  font-weight: 500;
  height: ${props => props.theme.size.layout[500]};

  &:hover {
    color: inherit;
  }
`

const Icon = styled(FontAwesomeIcon)`
  /* color: white; */
`

export const ButtonIcon = ({icon, ...props}) => (
  <Button {...props}>
    <Icon icon={icon} />
  </Button>
)

export default Button
