import React from 'react'
import { graphql } from 'gatsby'
import useDarkMode from 'use-dark-mode'
import Layout, { Container } from '../components/Layout'
import Row from '../components/Row'
import Header from '../components/Header'
import { Back } from '../components/Link'
import Switch from '../components/Switch'
import RepositoryRows from '../components/RepositoryRows'

const SettingsPage = ({ data: { source } }) => {
  const darkMode = useDarkMode()
  console.log(source)

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

        <RepositoryRows
          updatedAt={source.frontmatter.github.updatedAt}
          version={source.frontmatter.github.version}
        />
      </Container>
    </Layout>
  )
} 

export default SettingsPage

export const pageQuery = graphql`
  query SettingsQuery {
    source: markdownRemark(frontmatter: { id: { eq: "goldilocks-design" } }) {
      ...Project
    }
  }
`
