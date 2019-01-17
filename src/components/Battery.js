import React, { Component } from 'react'
import styled from 'styled-components'

const BatteryIndicator = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.colors.black[300]};
  border-radius: 0.75vh;
  width: 8vh;
  height: 2vh;
  overflow: hidden;

  &:before {
    display: block;
    content: " ";
    align-self: flex-start;
    z-index: 0;
  }

  &:after {
    display: block;
    position: absolute;
    content: " ";
    width: ${props => props.batteryLevel}%;
    height: 2vh;
    background-color: ${props => props.theme.colors.black[200]};
    align-self: flex-start;
    z-index: 1;
  }
`

export default class Battery extends Component {
  state = {
    isCharging: true,
    level: 1
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
    return (
      <BatteryIndicator {...this.props} batteryLevel={this.state.level} />
    )
  }
}

