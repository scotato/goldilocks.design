import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import moment from 'moment'

import { TimeClockDate } from '../components/Time'
import Card from '../components/Card'
import { AppBadge } from '../components/AppIcon'

const LockScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.hasNotifications ? 'flex-start' : 'center'};
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

const LockScreenTime = styled(TimeClockDate)`
  color: ${props => props.theme.colors.black[500]};
  margin-top: -${props => props.size === 'lg'
    ? 0
    : props.theme.size[300]
  };
  margin-bottom: ${props => props.size === 'lg'
    ? props.theme.size[300]
    : props.theme.size[400]
  };

  ${props => props.theme.media.tabletHorizontal`
    margin-bottom: ${props.size === 'lg'
      ? props.theme.size[400]
      : props.theme.size[500]
    };
  `}

  ${props => props.theme.media.phone`
    margin-bottom: ${props.size === 'lg'
      ? props.theme.size[500]
      : props.theme.size[600]
    };
  `}
`

export default props => {
  const byDate = (a, b) => moment(b.date).diff(moment(a.date))
  const latestPost = props.data.latestPost.edges[0].node
  const notifications = [{
    badge: {
      icon: 'fa-pencil-ruler',
      color: 'blue',
      colorWeight: 500,
    },
    title: 'goldilocks design',
    detail: 'v1.2.0',
    date: '04/03/2019 13:22',
    to: 'https://github.com/scotato/goldilocks.design',
  }, {
    badge: {
      icon: 'fa-book-open',
      color: 'yellow',
      colorWeight: 500,
    },
    title: latestPost.frontmatter.title,
    detail: `${latestPost.timeToRead} minute read`,
    date: latestPost.frontmatter.date,
    to: latestPost.fields.slug,
  }]
  
  return (
    <LockScreen hasNotifications={notifications.length}>
      <LockScreenTime size={notifications.length ? 'md' : 'lg'} />
      {notifications.sort(byDate).map(notification => (
        <Notification
          {...notification}
          key={notification.title}
          badge={<AppBadge isCircle {...notification.badge}/>}
        />
      ))}
    </LockScreen>
  )
}

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
    latestPost: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1
      ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`