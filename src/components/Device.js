import React from 'react'
import { useSettings, useDevice, useDeviceEffect } from '../hooks'
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
  position: relative;
  flex-direction: column;
  grid-area: layout-body;
  background-color: ${props => props.isOff || props.isDarkMode
    ? props.theme.colors.black[900] 
    : props.theme.colors.black[100]
  };
  box-shadow: 0 ${props => props.theme.size.layout[200]} ${props => props.theme.size.layout[400]} rgba(0, 0, 0, ${props => props.isOff || props.isDarkMode ? 0.15 : 0.075});
  border-radius: ${props => props.theme.size.layout[400]};
  will-change: border-top, background-color, box-shadow;
  transition: border-top .2s ease-out, background-color .2s ease-out, box-shadow .2s ease-out;
  z-index: 2;

  ${props => props.theme.media.tabletHorizontal`
    border-radius: ${props => props.theme.size.layout[450]};
  `}

  ${props => props.theme.media.tabletVertical`
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
  grid-template-rows: ${props => props.theme.size.layout[500]};
  color: ${props => props.isDarkMode
    ? props.theme.colors.black[700]
    : props.theme.colors.black[500]};
  text-transform: uppercase;
  font-size: ${props => props.theme.size.layout[350]};

  ${props => props.theme.media.tabletHorizontal`
    padding: ${props => `${props.theme.size.layout[400]} ${props.theme.size.layout[450]}`};
    grid-template-rows: ${props => props.theme.size.layout[500]};
    font-size: ${props => props.theme.size.layout[400]};
    font-weight: 600;
  `}

  ${props => props.theme.media.phone`
    padding: ${props => props.theme.size.layout[450]};
    grid-template-rows: ${props => props.theme.size.layout[600]};
    font-size: ${props => props.theme.size.layout[450]};
  `}
`

const DeviceHeaderNav = styled.nav`
  display: flex;
  align-items: center;
`

const DeviceHeaderIcon = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.size.layout[450]};

  ${props => props.theme.media.tabletHorizontal`
    width: ${props => props.theme.size.layout[500]};
  `}

  ${props => props.theme.media.tabletVertical`
    width: ${props => props.theme.size.layout[550]};
  `}

  ${props => props.theme.media.phone`
    width: ${props => props.theme.size.layout[600]};
  `}
`

const DeviceHeaderAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-self: end;
`

const DeviceNav = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: inherit;
  line-height: 1;
  text-transform: uppercase;
  height: ${props => props.theme.size.layout[350]};

  ${props => props.theme.media.tabletHorizontal`
    height: ${props => props.theme.size.layout[400]};
  `}

  ${props => props.theme.media.phone`
    height: ${props => props.theme.size.layout[500]};
  `}

  &:hover {
    color: inherit;
  }

  svg {
    margin-right: ${props => props.theme.size.layout[200]};
  }
`

const DeviceBody = styled.main`
  display: flex;
  padding: ${props => `${props.theme.size.layout[350]}`} ${props => `${props.theme.size.layout[450]}`};
  align-items: stretch;
  justify-content: stretch;
  flex-direction: column;
  flex-grow: 1;
`

const DeviceFooter = styled.footer`
  min-height: ${props => props.theme.size.layout[450]};
`

export default props => {
  const { children, navTitle, navTo, detail, backgroundIsFlipped, icon, footer, page } = props
  const [{ isDarkMode }] = useSettings()
  const [{ isOff }, setDevice] = useDevice()
  const hasHeader = !!(navTitle || detail || icon || page.icon)
  const hasFooter = !!footer
  useDeviceEffect()

  return (
    <>
      <Background {...page} isFlipped={backgroundIsFlipped} />
      <LockButton />
      {!detail && <Charger />}
      <Device isOff={isOff} isDarkMode={isDarkMode}>
        {!isOff && hasHeader && (
          <DeviceHeader isDarkMode={isDarkMode}>
            <DeviceHeaderNav>
              {navTitle
              ? (
                <DeviceNav to={navTo}>
                  <Icon name='chevron-left' />
                  {navTitle}
                </DeviceNav>
              )
              : <Network />}
            </DeviceHeaderNav>
            <DeviceHeaderIcon>
              <Icon name={icon || page.icon} />
            </DeviceHeaderIcon>
            <DeviceHeaderAction>
              {detail || <Battery /> }
            </DeviceHeaderAction>
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
