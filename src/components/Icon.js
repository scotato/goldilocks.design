import React from 'react'
import styled from 'styled-components'
import BatteryEmpty from '../icons/battery-empty.svg'
import BatteryQuarter from '../icons/battery-quarter.svg'
import BatteryHalf from '../icons/battery-half.svg'
import BatteryThreeQuarters from '../icons/battery-three-quarters.svg'
import BatteryFull from '../icons/battery-full.svg'
import Cellular from '../icons/cellular.svg'
import Lock from '../icons/lock.svg'
import Wifi from '../icons/wifi.svg'
import Home from '../icons/home.svg'

const icon = name => {
  switch (name) {
    case 'battery-empty':
      return BatteryEmpty
    case 'battery-quarter':
      return BatteryQuarter
    case 'battery-half':
      return BatteryHalf
    case 'battery-three-quarters':
      return BatteryThreeQuarters
    case 'battery-full':
      return BatteryFull
    case 'cellular':
      return Cellular
    case 'lock':
      return Lock
    case 'wifi':
      return Wifi
    case 'home':
      return Home
    default:
      return props => <div {...props} />
  }
}

export default props => {
  const Icon = styled(icon(props.name))`
    max-width: 100%;
    max-height: 100%;
    
    path {
      fill: currentColor;
    }
  `
  return <Icon {...props} />
}