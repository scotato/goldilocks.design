import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Battery from './Battery'
import Time from './Time'

const StatusBar = styled.div`
  display: grid;
  padding: 0 2vh;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 5vh;
  font-size: 1.5vh;
  background-color: white;
  border-bottom: 0.1vh solid rgba(0, 0, 0, 0.1);
  font-weight: 500;
`

const StatusLogo = styled(Logo)`
  width: 4.5vh;
`

const StatusTime = styled(Time)`
  justify-self: start;
`

const StatusBattery = styled(Battery)`
  justify-self: end;
`
export default props => {
  return (
    <StatusBar>
      <StatusTime />
      <StatusLogo />
      <StatusBattery />
    </StatusBar>
  )
}
