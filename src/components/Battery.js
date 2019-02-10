import React from 'react'
import styled from 'styled-components'
import { IconBattery, IconBolt } from './Icon'

const isActive = bar => props =>
  props.level > bar * 100 / 6
    ? props.theme.colors.black[500]
    : props.theme.colors.black[300]

const Battery = styled(IconBattery)`
  path {
    transition: fill .2s ease-out;
    will-change: fill;
  }

  .bar-1 {
    fill: ${isActive(1)};
  }

  .bar-2 {
    fill: ${isActive(2)};
  }

  .bar-3 {
    fill: ${isActive(3)};
  }

  .bar-4 {
    fill: ${isActive(4)};
  }

  .bar-5 {
    fill: ${isActive(5)};
  }
`

const Indicator = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.theme.size.layout[350]};
`

const Bolt = styled(IconBolt)`
  height: ${props => props.theme.size.layout[350]};
  transform: scale(${props => props.isActive ? 1 : 0});
  transition: transform .2s ease-out;
  will-change: transform;
`

export const BatteryIndicator = props => (
  <Indicator>
    <Bolt isActive={props.isCharging} />
    <Battery {...props} />
  </Indicator>
)

export default Battery
