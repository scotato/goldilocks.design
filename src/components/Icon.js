import React from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconStyled = styled.div`
  display: grid;
  place-items: center;
  line-height: 1;

  ${props => props.size && css`
    font-size: ${props.theme.size[props.size]};
    width: ${props.theme.size[props.size]};
  `}
`

const iconSwitch = icon => {
  switch (icon) {
    case 'github':
    case 'twitter':
      return ['fab', icon]
    default:
        return icon
  }
}

const Icon = ({ size, name, fixedWidth, ...props }) => (
  <IconStyled size={size} {...props}>
    <FontAwesomeIcon icon={iconSwitch(name)} fixedWidth={fixedWidth} />
  </IconStyled>
)

export const IconPlaceholder = styled(Icon)`
  color: ${props => props.theme.grayscale[200]};

  .dark-mode & {
    color: ${props => props.theme.grayscale[800]};
  }
`

export default Icon
