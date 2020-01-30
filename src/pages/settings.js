import React from 'react'
import useDarkMode from 'use-dark-mode'
import { Container } from '../components/Layout'
import SettingsRow from '../components/SettingsRow'
import Header from '../components/Header'
import Icon from '../components/Icon'
import Switch from '../components/Switch'

const SettingsPage = props => {
  const darkMode = useDarkMode(false)
  console.log(props)

  return (
    <>
      <Header title="Settings" {...props} />
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
