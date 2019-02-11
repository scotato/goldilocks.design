import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'

import Layout from '../components/Layout'
import Device from '../components/Device'
import { IconHome } from '../components/Icon'
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

const page = {
  icon: 'lock',
  color: 'black',
  colorWeight: 200
}

export default props => (
  <Layout>
    <ThemeConsumer>
      {theme => (
        <Device page={page}>
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
