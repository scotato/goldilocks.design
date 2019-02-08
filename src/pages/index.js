import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Icon from '../components/Icon'
import Battery from '../components/Battery'
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
`

const LockScreenDate = styled.div.attrs({
  children: <Time format='dddd, MMMM D' />
})`
  margin-bottom: ${props => props.theme.size.layout[500]};
  font-size: ${props => props.theme.size.typography[500]};
  line-height: 1;
  align-self: center;
`
const Network = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`

const Unlock = styled(ButtonLink).attrs({
  to: '/home',
  children: <Icon name='home' />
})`
  margin-top: auto;
  padding: ${props => props.theme.size.layout[300]};
  width: ${props => props.theme.size.layout[500]};
  background-color: ${props => props.theme.colors.black[200]};
  color: ${props => props.theme.colors.black[500]};
`

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
      >
        <ThemeConsumer>
          {theme => (
            <Device
            headerNav={
              <Network>
                <Icon name='cellular' />
                GOLDI
                <Icon name='wifi' />
              </Network>
            }
            headerIcon={<Icon name='lock' />}
            headerAction={<Battery />}
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
  }
}

export default Index

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