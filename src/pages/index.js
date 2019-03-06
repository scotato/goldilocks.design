import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Time from '../components/Time'

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

export default ({ data: { page }}) => (
  <Layout>
    <ThemeConsumer>
      {theme => (
        <Device page={page}>
          <LockScreen>
            <LockScreenTime />
            <LockScreenDate />
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