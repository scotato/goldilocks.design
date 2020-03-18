import React from 'react'
import styled from 'styled-components'

import { useClient } from '../hooks'
import { ButtonBase } from './Button'
import Icon, { IconPlaceholder } from './Icon'
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
  const isMounted = useClient()
  const { isOpen, toggleIsOpen } = useNavigation()

  return isMounted ? (
    <NavigationToggle onClick={toggleIsOpen}>
      <Icon name={isOpen ? 'expand' : 'compress'} />
    </NavigationToggle>
  ) : <IconPlaceholder name="square" />
}
