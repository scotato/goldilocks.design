import React, { Component } from 'react'
import styled from 'styled-components'
import BatteryEmpty from '../../content/icons/battery-empty.svg'
import BatteryQuarter from '../../content/icons/battery-quarter.svg'
import BatteryHalf from '../../content/icons/battery-half.svg'
import BatteryThreeQuarters from '../../content/icons/battery-three-quarters.svg'
import BatteryFull from '../../content/icons/battery-full.svg'

export default class Battery extends Component {
  state = {
    isCharging: true,
    level: 100
  }

  getIcon = () => {
    const batteryLevel = Math.floor(this.state.level/20)
    switch (batteryLevel) {
      case 0:
        return BatteryEmpty
      case 1:
        return BatteryQuarter
      case 2:
        return BatteryHalf
      case 3:
        return BatteryThreeQuarters
      default:
        return BatteryFull
    }
  }

  componentDidMount() {
    navigator && navigator.getBattery && navigator.getBattery().then(battery => {
      this.setState({
        isCharging: battery.charging,
        level: battery.level * 100
      })
    })
  }

  render () {
    const Icon = this.getIcon()
    const BatteryIcon = styled(Icon)`
      height: 33%;
    `
    return <BatteryIcon {...this.props} />
  }
}

