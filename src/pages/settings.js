import React from 'react'
import { graphql } from 'gatsby'
import useDarkMode from 'use-dark-mode'
import Layout, { Container } from '../components/Layout'
import Row from '../components/Row'
import Header from '../components/Header'
import { Back } from '../components/Link'
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
        <Row
          icon="moon"
          title="Dark Mode"
          detail={<Switch onChange={darkMode.toggle} checked={darkMode.value}/>}
        />

        <Row
          icon="tag"
          title="Version"
          detail={site.siteMetadata.version}
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
