import React from 'react'
import useDarkMode from 'use-dark-mode'
import SettingsRow, { Container } from '../components/SettingsRow'
import Icon from '../components/Icon'
import Switch from '../components/Switch'

const SettingsPage = () => {
  const darkMode = useDarkMode(false)

  return (
    <Container>
      <SettingsRow
        badge={<Icon name='moon' size={700} />}
        title="Dark Mode"
        action={<Switch onChange={darkMode.toggle} checked={darkMode.value}/>}
      />
    </Container>
  )
} 

export default SettingsPage
