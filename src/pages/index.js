import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import { IconHome, IconLock } from '../components/Icon'
import Network from '../components/Network'
import Time from '../components/Time'
import { ButtonLink } from '../components/Button'

const LockScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  color: ${props => props.theme.colors.black[500]};
`

const LockScreenTime = styled.div.attrs({
  children: <Time format='h:mm' />
})`
  margin-top: auto;
  font-size: ${props => props.theme.size.typography[900]};
  line-height: 1;
  align-self: center;
  justify-self: center;
  user-select: none;
`

const LockScreenDate = styled.div.attrs({
  children: <Time format='dddd, MMMM D' />
})`
  margin-bottom: ${props => props.theme.size.layout[500]};
  font-size: ${props => props.theme.size.typography[500]};
  line-height: 1;
  align-self: center;
  user-select: none;
`

const Unlock = styled(ButtonLink).attrs({
  to: '/home',
  children: <IconHome />
})`
  margin-top: auto;
  padding: ${props => props.theme.size.layout[300]};
  width: ${props => props.theme.size.layout[500]};
  background-color: ${props => props.theme.colors.black[200]};
  color: ${props => props.theme.colors.black[500]};
`

export default props => (
  <Layout
    location={props.location}
    title={props.data.site.siteMetadata.title}
  >
    <ThemeConsumer>
      {theme => (
        <Device
          headerNav={<Network />}
          headerIcon={<IconLock />}
          color={theme.colors.black[200]}
        >
          <LockScreen>
            <LockScreenTime />
            <LockScreenDate />
            <Unlock />
          </LockScreen>
        </Device>
      )}
    </ThemeConsumer>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/avatar-scotato.jpg/" }) {
      childImageSharp {
        fixed(width: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            author
            title
            intro
            date
            banner {
              childImageSharp {
                fixed(width: 256) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            icon {
              childImageSharp {
                fixed(width: 256) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`