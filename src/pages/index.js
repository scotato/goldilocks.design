import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Time from '../components/Time'
import Card from '../components/Card'
import { AppBadge } from '../components/AppIcon'

const LockScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`

const LockScreenTime = styled.div.attrs({
  children: <Time format='h:mm' />
})`
  font-size: ${props => props.theme.size.typography[900]};
  line-height: 1;
  align-self: center;
  justify-self: center;
  user-select: none;
  color: ${props => props.theme.colors.black[500]};
`

const LockScreenDate = styled.div.attrs({
  children: <Time format='dddd, MMMM D' />
})`
  margin-bottom: ${props => props.theme.size.layout[500]};
  font-size: ${props => props.theme.size.typography[500]};
  line-height: 1;
  align-self: center;
  user-select: none;
  color: ${props => props.theme.colors.black[500]};
`

const Notification = styled(Card)`
  width: ${props => props.theme.size.layout[800]};
`

export default ({ data: { page }}) => (
  <Layout>
    <ThemeConsumer>
      {theme => (
        <Device page={page}>
          <LockScreen>
            <LockScreenTime />
            <LockScreenDate />
            <Notification
              badge={(
                <AppBadge
                  icon='fa-pencil-ruler'
                  color='blue'
                  colorWeight={500}
                />
              )}
              title='goldilocks design'
              detail='github.com/scotato/goldilocks.design'
              date='03/06/2019 14:30'
              to='https://github.com/scotato/goldilocks.design'
            />
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