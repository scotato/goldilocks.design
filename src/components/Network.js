import React from 'react'
import styled from 'styled-components'
import { IndicatorCellular, IndicatorWifi } from './Indicator'

const Network = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`

export default props => (
  <Network>
    <IndicatorCellular level={3} />
    GOLDI
    <IndicatorWifi level={2} />
  </Network>
)