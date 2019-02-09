import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BlobAnimated } from './Blob'
import Charger from '../brand/device-charger.svg'
import LockButton from '../brand/device-lock-button.svg'
import Battery from '../components/Battery'

const Device = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: layout-body;
  position: relative;
  background-color: ${props => props.theme.colors.black[100]};
  box-shadow: 0 ${props => props.theme.size.layout[200]} ${props => props.theme.size.layout[400]} rgba(0, 0, 0, 0.075);
  border-radius: ${props => props.theme.size.layout[400]};
`

const DeviceCharger = styled(Charger)`
  position: absolute;
  align-self: center;
  bottom: ${props => props.isCharging ? 0 : `-${props.theme.size.layout[400]}`};
  width: ${props => props.theme.size.layout[400]};
  transition: bottom .2s ease-out;
  will-change: bottom;
  cursor: pointer;
`

const DeviceLockButton = styled(LockButton)`
  position: absolute;
  margin-right: ${props => props.theme.size.layout[350]};
  top: ${props => props.theme.size.layout[550]};
  right: ${props => props.theme.size.layout[550]};
  width: ${props => props.theme.size.layout[200]};
  transform: translateX(${props => props.isMouseDown ? -2 : 0}px);
  transition: transform .2s ease-out;
  will-change: transform;
  cursor: pointer;
`

const DeviceHeader = styled.header`
  display: grid;
  padding: ${props => `${props.theme.size.layout[300]} ${props.theme.size.layout[400]}`};
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  color: ${props => props.theme.colors.black[400]};
`

const DeviceHeaderNav = styled.nav`
  display: flex;
  align-items: stretch;
  height: ${props => `${props.theme.size.layout[350]}`};
`

const DeviceHeaderIcon = styled.div`
  height: ${props => `${props.theme.size.layout[450]}`};
  justify-self: center;
`

const DeviceHeaderAction = styled.div`
  height: ${props => `${props.theme.size.layout[450]}`};
  justify-self: end;
`

const DeviceBody = styled.main`
  padding: ${props => `${props.theme.size.layout[500]} ${props.theme.size.layout[600]}`};
  flex-grow: 1;
`

const DeviceFooter = styled.footer`
`

const DeviceBackground = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  border-top: ${props => props.theme.size.layout[100]} solid ${props => props.color};
  background-color: ${props => props.theme.colors.black[100]};
`

const DeviceBackgroundBlob = styled(BlobAnimated)`
  height: ${props => props.theme.size.layout[600]};
`

export default ({children, headerNav, headerIcon, headerAction, footer, color, ...props}) => {
  const [isCharging, setIsCharging] = useState(false)
  const [batteryLevel, setBatteryLevel] = useState(100)
  const [isLockButtonMouseDown, setIsLockButtonMouseDown] = useState(false)
  const hasHeader = (headerNav || headerIcon || headerAction) && true
  const hasFooter = footer && true

  useEffect(() => {
    const batteryInterval = setInterval(() => {
      const isEmpty = batteryLevel === 0
      const isFull = batteryLevel === 100
      isEmpty && setIsCharging(true)
      isFull && setIsCharging(false)
      setBatteryLevel(
        isCharging && isFull
          ? 100
          : isCharging
            ? batteryLevel + 1
            : isEmpty
              ? 0
              : batteryLevel - 1 
      )
    }, 1000)
    return () => clearInterval(batteryInterval)
  })

  return (
    <>
      <DeviceBackground color={color}>
        <DeviceBackgroundBlob color={color} />
        <DeviceLockButton
          isMouseDown={isLockButtonMouseDown}
          onMouseDown={() => setIsLockButtonMouseDown(true)}
          onMouseOut={() => setIsLockButtonMouseDown(false)}
          onMouseUp={() => setIsLockButtonMouseDown(false)}
        />
        <DeviceCharger
          isCharging={isCharging}
          onClick={() => setIsCharging(!isCharging)}
        />
      </DeviceBackground>
      <Device {...props}>
        {hasHeader && (
          <DeviceHeader>
            <DeviceHeaderNav>{headerNav}</DeviceHeaderNav>
            <DeviceHeaderIcon>{headerIcon}</DeviceHeaderIcon>
            <DeviceHeaderAction>{headerAction
              ? headerAction
              : <Battery isCharging={isCharging} level={batteryLevel} />
            }</DeviceHeaderAction>
          </DeviceHeader>
        )}
        <DeviceBody>
          {children}
        </DeviceBody>
        {hasFooter && (
          <DeviceFooter>
            {footer}
          </DeviceFooter>
        )}
      </Device>
    </>
  )
  
}
