import React from 'react'
import useDarkMode from 'use-dark-mode'
import { Container } from '../components/Layout'
import SettingsRow from '../components/SettingsRow'
import Header from '../components/Header'
import { Back } from '../components/Link'
import Icon from '../components/Icon'
import Switch from '../components/Switch'

const SettingsPage = () => {
  const darkMode = useDarkMode(false)

  return (
    <>
      <Header
        title="Settings"
        primary={<Back to='/' />}
      />
      <Container>
        <SettingsRow
          badge={<Icon name='moon' size={700} />}
          title="Dark Mode"
          action={<Switch onChange={darkMode.toggle} checked={darkMode.value}/>}
        />
      </Container>
    </>
  )
} 

export default SettingsPage
