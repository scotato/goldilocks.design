import React from 'react'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'

import { ButtonBase } from './Button'
import Icon from './Icon'
import Switch from './Switch'

const ToggleButton = styled(ButtonBase)`
  color: ${props => props.theme.color.info};

  &:focus {
    outline: none;
    color: inherit;
  }
`

export const DarkModeSwitch = () => {
  const { value, toggle } = useDarkMode()

  return (
    <Switch checked={value} onChange={toggle} />
  )
}

export const DarkModeToggle = () => {
  const { value, toggle } = useDarkMode()

  return (
    <ToggleButton onClick={toggle}>
      <Icon name={value ? 'moon' : 'sun'} />
    </ToggleButton>
  )
}
