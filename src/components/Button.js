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

export const ButtonText = styled(ButtonBase)`
  color: ${props => props.theme.color.info};

  &:disabled {
    color: ${props => props.theme.color.default};
    cursor: default;
  }
`

const Button = styled(ButtonBase).attrs({
  disabled: props => props.isActive
})`
  color: ${props => props.color || (props.isActive ? 'white' : props.theme.grayscale[600])};
  background-color: ${props => props.backgroundColor || (props.isActive ? 'dodgerblue' : props.theme.grayscale[200])};
  border-radius: ${props => props.theme.size[400]};
  cursor: ${props => props.isActive ? 'default' : 'pointer'};

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px dodgerblue;
  }
`

export const ButtonLink = styled(Link)`
  display: flex;
  padding: ${props => props.theme.size[400]};
  border-radius: ${props => props.theme.size[500]};
  align-items: center;
  background-color: ${props => props.theme.color[props.color || 'blue']};
  font-weight: 600;
  height: ${props => props.theme.size[500]};
  color: white;

  ${props => props.theme.media.tabletVertical`
    height: ${props => props.theme.size[550]};
    border-radius: ${props => props.theme.size[550]};
  `}

  ${props => props.theme.media.phone`
    height: ${props => props.theme.size[650]};
    border-radius: ${props => props.theme.size[550]};
  `}

  &:hover {
    color: white;
  }
`

export const ButtonToggle = styled(ButtonBase)`
  width: ${props => props.theme.size[600]};
  color: ${props => props.theme.color.info};

  ${props => props.theme.media.tabletVertical`
    width: ${props => props.theme.size[500]};
  `}

  &:focus {
    outline: none;
    color: inherit;
  }
`

export const buttonToggleTransition = {
  from: { position: 'absolute', transform: 'scale(0)', opacity: 0 },
  enter: { transform: 'scale(1)', opacity: 1 },
  leave: { transform: 'scale(0)', opacity: 0 },
}

export default Button
