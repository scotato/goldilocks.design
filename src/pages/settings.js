import React from 'react'
import { graphql } from 'gatsby'

import Layout, { Container } from '../components/Layout'
import SEO from '../components/SEO'
import Group from '../components/Group'
import Row from '../components/Row'
import Subscribe from '../components/Subscribe'
import ActivityList from '../components/ActivityList'
import { DarkModeSwitch } from '../components/DarkMode'
import { Back } from '../components/Link'

export const DarkMode = () => (
  <Group>
    <Row
      icon="moon"
      title="Dark Mode"
      detail={<DarkModeSwitch />}
    />
  </Group>
)

const SettingsPage = ({ data: { source }, location: { pathname } }) => (
  <Layout title="Settings" headerPrimary={<Back to='/' />}>
    <SEO />
    <Container>
      <DarkMode />

      <Subscribe context={pathname} />

      <ActivityList
        updatedAt={source.frontmatter.github.updatedAt}
        version={source.frontmatter.github.version}
      />
    </Container>
  </Layout>
)

export default SettingsPage

export const pageQuery = graphql`
  query SettingsQuery {
    source: mdx(frontmatter: { id: { eq: "goldilocks-design" } }) {
      frontmatter {
        ...ProjectFrontmatter
      }
    }
  }
`
