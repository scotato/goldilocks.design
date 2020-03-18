import React from 'react'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'

import { useClient } from '../hooks'
import { ButtonBase } from './Button'
import Icon, { IconPlaceholder } from './Icon'
import Switch from './Switch'

const ToggleButton = styled(ButtonBase)`
  color: ${props => props.theme.color.info};

  &:focus {
    outline: none;
    color: inherit;
  }
`

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

  return isMounted ? (
    <ToggleButton onClick={toggle}>
      <Icon name={value ? 'moon' : 'sun'} />
    </ToggleButton>
  ) : <IconPlaceholder name="circle" />
}
