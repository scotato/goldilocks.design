import React, { useEffect } from 'react'
import { useSettings, useDevice } from '../hooks'
import styled, { ThemeConsumer } from 'styled-components'
import { Location } from '@reach/router'
import { Link, navigate } from "gatsby"

import { BlobAnimated } from './Blob'
import Network from './DeviceNetwork'
import Battery from './DeviceBattery'
import Charger from './DeviceCharger'
import LockButton from './DeviceLockButton'
import Icon from '../components/Icon'
import Logo from '../components/Logo'

const Device = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: layout-body;
  position: relative;
  background-color: ${props => props.isOff || props.isDarkMode
    ? props.theme.colors.black[900] 
    : props.theme.colors.black[100]
  };
  box-shadow: 0 ${props => props.theme.size.layout[200]} ${props => props.theme.size.layout[400]} rgba(0, 0, 0, ${props => props.isOff || props.isDarkMode ? 0.15 : 0.075});
  border-radius: ${props => props.theme.size.layout[400]};
  will-change: border-top, background-color, box-shadow;
  transition: border-top .2s ease-out, background-color .2s ease-out, box-shadow .2s ease-out;
`

const LockLogo = styled(Logo)`
  position: relative;
  grid-area: layout-body;
  width: ${props => props.theme.size.layout[700]};
  margin: auto;
  cursor: pointer;
`

const DeviceHeader = styled.header`
  display: grid;
  padding: ${props => `${props.theme.size.layout[300]} ${props.theme.size.layout[400]}`};
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: ${props => props.theme.size.layout[450]};
  color: ${props => props.isDarkMode
    ? props.theme.colors.black[700]
    : props.theme.colors.black[400]};
  text-transform: uppercase;
`

const DeviceHeaderNav = styled.nav`
  display: flex;
  align-items: center;
`

const DeviceHeaderIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DeviceHeaderAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-self: end;
`

const DeviceBody = styled.main`
  display: flex;
  padding: ${props => `${props.theme.size.layout[400]}`} ${props => `${props.theme.size.layout[500]}`};
  align-items: stretch;
  justify-content: stretch;
  flex-direction: column;
  flex-grow: 1;
`

const DeviceFooter = styled.footer`
  min-height: ${props => props.theme.size.layout[450]};
`

const DeviceBackground = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: ${props => props.theme.size.layout[100]} solid ${props => props.isOff || props.theme.isDarkMode
    ? props.theme.colors.black[800] 
    : props.theme.colors[props.color][props.colorWeight]
  };
  background-color: ${props => props.isOff || props.isDarkMode
    ? props.theme.colors.black[900] 
    : props.theme.colors.black[100]
  };
  will-change: border-top, background-color;
  transition: border-top .2s ease-out, background-color .2s ease-out;
`

const DeviceBackgroundBlob = styled(BlobAnimated).attrs({
  color: props => props.isOff
    ? props.theme.colors.black[800] 
    : props.theme.colors[props.color][props.colorWeight]
})`
  height: ${props => props.theme.size.layout[600]};
`

const DeviceNav = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: inherit;
  line-height: 1;
  text-transform: uppercase;
  height: ${props => props.theme.size.layout[350]};

  &:hover {
    color: inherit;
  }

  svg {
    margin-right: ${props => props.theme.size.layout[200]};
  }
`

export default ({
  children,
  headerNav,
  headerIcon,
  headerAction,
  footer,
  page = {},
  shouldShowNav,
  ...props
}) => {
  const [{ isDarkMode }] = useSettings()
  const [{ isOff, isCharging, batteryLevel }, setDevice] = useDevice()
  const hasHeader = (headerNav || headerIcon || headerAction || page.icon) && true
  const hasFooter = footer && true
  const { icon = props.icon } = page
  const deviceProps = {
    color: props.color || page.color || 'black',
    colorWeight: props.colorWeight || page.colorWeight || 500,
    isDarkMode,
    isOff,
    isCharging,
    batteryLevel
  }

  useEffect(() => {
    const batteryInterval = setInterval(() => {
      const isEmpty = batteryLevel === 0
      const isFull = batteryLevel >= 100
      isEmpty && setDevice.isCharging(true)
      isFull && setDevice.isCharging(false)
      isFull && setDevice.batteryLevel(100)
      setDevice.batteryLevel(
        isCharging
          ? isFull
            ? 100
            : batteryLevel > 95
              ? 100
              : batteryLevel + 5
          : isEmpty
            ? 0
            : batteryLevel - 1
      )
    }, 1000)
    return () => clearInterval(batteryInterval)
  })

  return (
    <ThemeConsumer>
      {theme => (
        <Location>
          {route => (
            <>
              <DeviceBackground {...deviceProps}>
                <DeviceBackgroundBlob {...deviceProps} />
              </DeviceBackground>
              <LockButton onClick={() => {
                setDevice.isOff(!isOff)
                route.location.pathname !== '/' && navigate('/')
              }} />
              {!headerAction && (
                <Charger
                  isCharging={isCharging}
                  isOff={isOff}
                  onClick={() => setDevice.isCharging(!isCharging)}
                />)
              }
              <Device {...deviceProps} {...props}>
                {!isOff && hasHeader && (
                  <DeviceHeader {...deviceProps}>
                    <DeviceHeaderNav>{shouldShowNav
                      ? (
                      <DeviceNav to={page.to || '/home'}>
                        <Icon name='chevron-left' />
                        {page.title}
                      </DeviceNav>
                      )
                      : <Network />
                    }</DeviceHeaderNav>
                    <DeviceHeaderIcon>{headerIcon
                      ? headerIcon
                      : <Icon name={icon} />
                    }</DeviceHeaderIcon>
                    <DeviceHeaderAction>{headerAction
                      ? headerAction
                      : <Battery isCharging={isCharging} level={batteryLevel} />
                    }</DeviceHeaderAction>
                  </DeviceHeader>
                )}
                <DeviceBody>
                {isOff ? (
                  <LockLogo onClick={() => setDevice.isOff(false)} />
                ) : children}
                </DeviceBody>
                {hasFooter && (
                  <DeviceFooter>
                    {footer}
                  </DeviceFooter>
                )}
              </Device>
            </>
          )}
        </Location>
      )}
    </ThemeConsumer>
  )
}
