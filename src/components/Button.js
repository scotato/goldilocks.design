import styled from 'styled-components'

import Link from './Link'

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
  border-radius: ${props => props.theme.size[400]};
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
  border-radius: ${props => props.theme.size[500]};
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  font-weight: 500;
  height: ${props => props.theme.size[500]};

  ${props => props.theme.media.tabletVertical`
    height: ${props => props.theme.size[550]};
    border-radius: ${props => props.theme.size[550]};
  `}

  ${props => props.theme.media.phone`
    height: ${props => props.theme.size[650]};
    border-radius: ${props => props.theme.size[550]};
  `}

  &:hover {
    color: inherit;
  }
`

export default Button
