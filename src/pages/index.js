import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
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
  width: ${props => props.theme.size.layout[800]};
`

const notifications = [{
  badge: {
    icon: 'fa-pencil-ruler',
    color: 'blue',
    colorWeight: 500,
  },
  title: 'goldilocks design',
  detail: 'v1.0.0',
  date: '03/06/2019 14:30',
  to: 'https://github.com/scotato/goldilocks.design',
}]

const LockScreenTime = styled(TimeClockDate)`
  color: ${props => props.theme.colors.black[500]};
  margin-top: -${props => props.size === 'lg'
    ? 0
    : props.theme.size.layout[300]
  };
  margin-bottom: ${props => props.size === 'lg'
    ? props.theme.size.layout[300]
    : props.theme.size.layout[400]
  };
`

export default ({ data: { page }}) => (
  <Layout>
    <ThemeConsumer>
      {theme => (
        <Device page={page} footer>
          <LockScreen hasNotifications={notifications.length}>
            <LockScreenTime size={notifications.length ? 'md' : 'lg'} />
            {notifications.map(notification => (
              <Notification
                {...notification}
                key={notification.title}
                badge={<AppBadge {...notification.badge}/>}
              />
            ))}
          </LockScreen>
        </Device>
      )}
    </ThemeConsumer>
  </Layout>
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
  }
`