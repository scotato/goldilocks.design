import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IndicatorCellular, IndicatorWifi } from './Indicator'

const Network = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.black[400]};
  height: ${props => props.theme.size.layout[350]};
  font-size: ${props => props.theme.size.layout[350]};
  font-weight: 400;
  user-select: none;

  ${props => props.theme.media.tabletHorizontal`
    font-weight: 600;
    height: ${props => props.theme.size.layout[400]};
    font-size: ${props => props.theme.size.layout[400]};
  `}

  ${props => props.theme.media.phone`
    height: ${props => props.theme.size.layout[500]};
    font-size: ${props => props.theme.size.layout[500]};
  `}
`

const NetworkTitle = styled.span`
  margin-left: ${props => props.theme.size.layout[100]};
  margin-right: ${props => props.theme.size.layout[150]};
  line-height: 1;
  letter-spacing: -0.025em;
`

const NetworkIndicatorCellular = styled(IndicatorCellular)`
  transform: scale(1.25);
`
const NetworkIndicatorWifi = styled(IndicatorWifi)`
  transform: scale(1.25);
`

export default props => {
  const [cellularLevel, setCellularLevel] = useState(3)
  const [wifiLevel, setWifiLevel] = useState(2)

  useEffect(() => {
    const networkInterval = setInterval(() => {
      Math.round(Math.random()) // coin flip
        ? setCellularLevel(Math.round(Math.random() * 2) + 2) // 2 - 4
        : setWifiLevel(Math.round(Math.random()) + 2) // 2 - 3
    }, 1000)
    return () => clearInterval(networkInterval)
  })

  return (
    <Network>
      <NetworkIndicatorCellular level={cellularLevel} />
      <NetworkTitle>GOLDI</NetworkTitle>
      <NetworkIndicatorWifi level={wifiLevel} />
    </Network>
  )
}