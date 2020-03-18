import React from 'react'
import useDarkMode from 'use-dark-mode'
import { useTransition, animated } from 'react-spring'

import { useClient } from '../hooks'
import { ButtonToggle, buttonToggleTransition } from './Button'
import Icon, { IconPlaceholder } from './Icon'
import Switch from './Switch'
import Group from './Group'
import Row from './Row'

export const DarkModeSwitch = () => {
  const isMounted = useClient()
  const { value, toggle } = useDarkMode()
  
  return isMounted
    ? <Switch checked={value} onChange={toggle} />
    : null
}

export const DarkModeToggle = () => {
  const isMounted = useClient()
  const { value, toggle } = useDarkMode()
  const transitions = useTransition(value, null, buttonToggleTransition)

  return (
    <ButtonToggle onClick={toggle}>
      {isMounted
        ? transitions.map(({ item, key, props }) => item
          ? <animated.div style={props}><Icon name="moon" /></animated.div>
          : <animated.div style={props}><Icon name="sun" /></animated.div>)
        : <IconPlaceholder name="circle" />
      }
    </ButtonToggle>
  )
}

export const DarkModeRow = () => (
  <Group>
    <Row
      icon="moon"
      title="Dark Mode"
      detail={<DarkModeSwitch />}
    />
  </Group>
)
