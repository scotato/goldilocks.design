import React from 'react'
import { graphql } from 'gatsby'
import useDarkMode from 'use-dark-mode'
import Layout, { Container } from '../components/Layout'
import Group from '../components/Group'
import Row from '../components/Row'
import Header from '../components/Header'
import { Back } from '../components/Link'
import Switch from '../components/Switch'
import Subscribe from '../components/Subscribe'
import ActivityList from '../components/ActivityList'

const SettingsPage = ({ data: { source }, location: { pathname } }) => {
  const darkMode = useDarkMode()

  return (
    <Layout>
      <Header
        title="Settings"
        primary={<Back to='/' />}
      />
      <Container>
        <Group>
          <Row
            icon="moon"
            title="Dark Mode"
            detail={<Switch onChange={darkMode.toggle} checked={darkMode.value}/>}
          />
        </Group>

        <Subscribe context={pathname} />

        <ActivityList
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
      frontmatter {
        ...ProjectFrontmatter
      }
    }
  }
`
