import React from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

import { useClient } from '../hooks'
import { useNavigation } from '../hooks'
import { ButtonToggle, buttonToggleTransition } from './Button'
import Icon, { IconPlaceholder } from './Icon'

const NavigationToggle = styled(ButtonToggle)`
  ${props => props.theme.media.tabletVertical`
    display: none;
  `}
`

export default () => {
  const isMounted = useClient()
  const { isOpen, toggleIsOpen } = useNavigation()
  const transitions = useTransition(isOpen, null, buttonToggleTransition)

  return (
    <NavigationToggle onClick={toggleIsOpen}>
      {isMounted
        ? transitions.map(({ item, key, props }) => item
          ? <animated.div style={props}><Icon name="expand" /></animated.div>
          : <animated.div style={props}><Icon name="compress" /></animated.div>)
        : <IconPlaceholder name="square" />
      }
    </NavigationToggle>
  )
}
