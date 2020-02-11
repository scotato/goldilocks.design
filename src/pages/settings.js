import React from 'react'
import useDarkMode from 'use-dark-mode'
import Layout, { Container } from '../components/Layout'
import SettingsRow from '../components/SettingsRow'
import Header from '../components/Header'
import { Back } from '../components/Link'
import Icon from '../components/Icon'
import Switch from '../components/Switch'

const SettingsPage = ({ data: { site } }) => {
  const darkMode = useDarkMode()

  return (
    <Layout>
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

        <SettingsRow
          badge={<Icon name='tag' size={700} />}
          title="Version"
          action={site.siteMetadata.version}
        />
      </Container>
    </Layout>
  )
} 

export default SettingsPage

export const pageQuery = graphql`
  query SettingsQuery {
    site {
      siteMetadata {
        version
      }
    }
  }
`
