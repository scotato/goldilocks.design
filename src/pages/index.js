import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Card from '../components/Card'
import { AppBadge } from '../components/AppIcon'

const LockScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`

const Notification = styled(Card)`
  width: ${props => props.theme.size[800]};
  
  ${props => props.theme.media.tabletHorizontal`
    width: ${props => props.theme.size[850]};
  `}

  ${props => props.theme.media.tabletVertical`
    width: 100%;
  `}
`

export default props => (
  <LockScreen>
    {props.data.posts.edges.map(({node: post}) => (
      <Notification
        key={post.title}
        title={post.frontmatter.title}
        detail={`${post.timeToRead} minute read`}
        date={post.frontmatter.date}
        to={post.fields.slug}
        badge={
          <AppBadge
            icon='fa-book-open'
            color='yellow'
            colorWeight={500}
            isCircle
          />
        }
      />
    ))}
  </LockScreen>
)

export const query = graphql`
  fragment ScreenInfo on ScreensYaml {
    id
    icon
    title
    color
    colorWeight
  }
`

export const pageQuery = graphql`
  query {
    page: screensYaml(id: { eq: "lock" }) {
      ...ScreenInfo
    }
    posts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`