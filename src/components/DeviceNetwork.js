import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IndicatorCellular, IndicatorWifi } from './Indicator'

const Network = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  height: ${props => props.theme.size.layout[350]};
  font-size: ${props => props.theme.size.typography[300]};

  ${props => props.theme.media.tabletHorizontal`
    height: ${props => props.theme.size.layout[400]};
    font-size: ${props => props.theme.size.typography[400]};
    font-weight: 500;
    letter-spacing: -0.025em;
  `}

  ${props => props.theme.media.phone`
    height: ${props => props.theme.size.layout[500]};
    font-size: ${props => props.theme.size.typography[500]};
    font-weight: 600;
  `}
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
      <IndicatorCellular level={cellularLevel} />
      GOLDI
      <IndicatorWifi level={wifiLevel} />
    </Network>
  )
}