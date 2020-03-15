import React from 'react'
import styled from 'styled-components'

import { ButtonBase } from './Button'
import Icon from './Icon'
import { useNavigation } from '../hooks'

const NavigationToggle = styled(ButtonBase)`
  color: ${props => props.theme.color.info};

  &:focus {
    outline: none;
    color: inherit;
  }

  ${props => props.theme.media.tabletVertical`
    display: none;
  `}
`

export default () => {
  const { isOpen, toggleIsOpen } = useNavigation(true)

  return (
    <NavigationToggle onClick={toggleIsOpen}>
      <Icon name={isOpen ? 'expand' : 'compress'} size={600} />
    </NavigationToggle>
  )
}
