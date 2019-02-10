import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Network from '../components/Network'
import Link from '../components/Link'
import {
  IconHome,
  IconNotifications,
  IconBlog,
  IconProjects,
  IconTools,
  IconMessages,
  IconMusic,
  IconVideos,
  IconSettings
} from '../components/Icon'

const Apps = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Badge = styled(Link)`
  margin: ${props => props.theme.size.layout[400]};
  padding: ${props => props.theme.size.layout[250]};
  width: ${props => props.theme.size.layout[600]};
  color: ${props => props.theme.colors.black[100]};
  border-radius: ${props => props.theme.size.layout[400]};
  background-color: ${props => props.theme.colors.black[500]};

  &:hover {
    color: ${props => props.theme.colors.black[100]};
  }
`

const Notifications = styled(Badge).attrs({
  children: <IconNotifications />,
  to: '/notifications'
})`
  background-color: ${props => props.theme.colors.red[500]};
`

const Blog = styled(Badge).attrs({
  children: <IconBlog />,
  to: '/blog'
})`
  background-color: ${props => props.theme.colors.yellow[500]};
`

const Projects = styled(Badge).attrs({
  children: <IconProjects />,
  to: '/projects'
})`
  background-color: ${props => props.theme.colors.blue[500]};
`

const Tools = styled(Badge).attrs({
  children: <IconTools />,
  to: '/tools'
})`
  /* background-color: ${props => props.theme.colors.orange[500]}; */
`

const Messages = styled(Badge).attrs({
  children: <IconMessages />,
  to: '/messages'
})`
  background-color: ${props => props.theme.colors.green[500]};
`

const Music = styled(Badge).attrs({
  children: <IconMusic />,
  to: '/music'
})`
  /* background-color: ${props => props.theme.colors.purple[500]}; */
`

const Videos = styled(Badge).attrs({
  children: <IconVideos />,
  to: '/videos'
})`
  /* background-color: ${props => props.theme.colors.pink[500]}; */
`

const Settings = styled(Badge).attrs({
  children: <IconSettings />,
  to: '/settings'
})`
  background-color: ${props => props.theme.colors.black[500]};
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
          headerIcon={<IconHome />}
          color={theme.colors.yellow[500]}
          lockAction={() => props.navigate(props.location.pathname === '/' ? '/home' : '/')}
        >
          <Apps>
            <Notifications />
            <Blog />
            <Projects />
            <Tools />
            <Messages />
            <Music />
            <Videos />
            <Settings />
          </Apps>
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