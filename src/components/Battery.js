import React from 'react'
import styled from 'styled-components'
import { IndicatorBattery } from './Indicator'
import { IconBolt } from './Icon'

const Battery = styled.div`
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

export default props => (
  <Battery>
    <Bolt isActive={props.isCharging} />
    <IndicatorBattery level={Math.floor(props.level * 6 / 100)} />
  </Battery>
)
