import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.button.attrs({
  disabled: props => props.isActive
})`
  display: flex;
  background-color: ${props => props.isActive ? 'dodgerblue' : props.theme.colors.black[300]};
  border-radius: 2.5vh;
  cursor: ${props => props.isActive ? 'default' : 'pointer'};
  border: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.1s ease-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px dodgerblue;
  }
`

export const ButtonLink = styled(Link)`
  display: flex;
  padding: 1em 1.5em;
  border-radius: 2em;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.gold[900]};
  font-weight: 500;

  &:hover {
    color: ${props => props.theme.colors.gold[900]};
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: white;
`

export const ButtonIcon = ({icon, ...props}) => (
  <Button {...props}>
    <Icon icon={icon} />
  </Button>
)

export default Button
