import React from 'react'
import { useSettings, usePage, useDevice, useDeviceEffect } from '../hooks'
import styled from 'styled-components'
import { Link } from "gatsby"

import Network from './DeviceNetwork'
import Battery from './DeviceBattery'
import Charger from './DeviceCharger'
import LockButton from './DeviceLockButton'
import Background from './DeviceBackground'
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

  ${props => props.theme.media.tabletHorizontal`
    border-radius: ${props => props.theme.size.layout[500]};
  `}

  ${props => props.theme.media.phone`
    border-radius: ${props => props.theme.size.layout[550]};
  `}
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

  ${props => props.theme.media.tabletHorizontal`
    padding: ${props => `${props.theme.size.layout[400]} ${props.theme.size.layout[450]}`};
    grid-template-rows: ${props => props.theme.size.layout[500]};
  `}

  ${props => props.theme.media.phone`
    padding: ${props => props.theme.size.layout[500]};
    grid-template-rows: ${props => props.theme.size.layout[550]};
  `}
`

const DeviceHeaderNav = styled.nav`
  display: flex;
  align-items: center;
`

const DeviceHeaderIcon = styled.div`
  text-align: center;
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
  shouldShowNav
}) => {
  const [{ isDarkMode }] = useSettings()
  const [{ title, icon, color, colorWeight }] = usePage()
  const [{ isOff, isCharging, batteryLevel }, setDevice] = useDevice()
  const hasHeader = !!(headerNav || headerIcon || headerAction || icon)
  const hasFooter = !!footer
  useDeviceEffect()

  return (
    <>
      <Background color={color} colorWeight={colorWeight} />
      <LockButton />
      {!headerAction && <Charger />}
      <Device isOff={isOff} isDarkMode={isDarkMode}>
        {!isOff && hasHeader && (
          <DeviceHeader isDarkMode={isDarkMode}>
            <DeviceHeaderNav>{shouldShowNav
              ? (
              <DeviceNav to='/home'>
                <Icon name='chevron-left' />
                {title}
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
  )
}
