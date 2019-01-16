import React, { Component } from 'react'
import styled from 'styled-components'

const BatteryIndicator = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.colors.black[200]};
  border-radius: 0.5vh;
  width: 4vh;
  height: 1vh;
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
    height: 1vh;
    background-color: ${props => props.theme.colors.black[900]};
    align-self: flex-start;
    z-index: 1;
  }
`

export default class Battery extends Component {
  constructor (props) {
    super(props)
  }

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

