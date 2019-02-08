import React, { Component } from 'react'
import Icon from './Icon'

export default class Battery extends Component {
  state = {
    isCharging: true,
    level: 100
  }

  getIcon = () => {
    const batteryLevel = Math.floor(this.state.level/20)
    switch (batteryLevel) {
      case 0:
        return 'battery-empty'
      case 1:
        return 'battery-quarter'
      case 2:
        return 'battery-half'
      case 3:
        return 'battery-three-quarters'
      default:
        return 'battery-full'
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

  render = () => <Icon name={this.getIcon()} {...this.props} /> 
}

