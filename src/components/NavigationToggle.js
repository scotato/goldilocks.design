import React from 'react'
import { useTransition, animated } from 'react-spring'

import { useClient } from '../hooks'
import { useNavigation } from '../hooks'
import { ButtonToggle, buttonToggleTransition } from './Button'
import Icon, { IconPlaceholder } from './Icon'

export default () => {
  const isMounted = useClient()
  const { isOpen, toggleIsOpen } = useNavigation()
  const transitions = useTransition(isOpen, null, buttonToggleTransition)

  return (
    <ButtonToggle onClick={toggleIsOpen}>
      {isMounted
        ? transitions.map(({ item, key, props }) => item
          ? <animated.div style={props}><Icon name="expand" /></animated.div>
          : <animated.div style={props}><Icon name="compress" /></animated.div>)
        : <IconPlaceholder name="square" />
      }
    </ButtonToggle>
  )
}
