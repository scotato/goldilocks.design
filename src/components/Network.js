import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IndicatorCellular, IndicatorWifi } from './Indicator'

const Network = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`

export default props => {
  const [cellularLevel, setCellularLevel] = useState(3)
  const [wifiLevel, setWifiLevel] = useState(2)

  useEffect(() => {
    const networkInterval = setInterval(() => {
      const seed = Math.round(Math.random())
      seed === 0 && setCellularLevel(Math.round(Math.random() * 2) + 2)
      seed === 1 && setWifiLevel(Math.round(Math.random()) + 2)
    }, 2000)
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