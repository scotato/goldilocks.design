import React from 'react'
import { useSettings, useDevice, useDeviceEffect } from '../hooks'
import styled, { css } from 'styled-components'
import { Link } from "gatsby"

import Network from './DeviceNetwork'
import Battery from './DeviceBattery'
import Charger from './DeviceCharger'
import LockButton from './DeviceLockButton'
import DeviceBlob from './DeviceBlob'
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
  box-shadow: 0 ${props => props.theme.size[200]} ${props => props.theme.size[400]} rgba(0, 0, 0, ${props => props.isOff || props.isDarkMode ? 0.15 : 0.075});
  border-radius: ${props => props.theme.size[400]};
  will-change: border-top, background-color, box-shadow;
  transition: border-top .2s ease-out, background-color .2s ease-out, box-shadow .2s ease-out;
  z-index: 2;

  ${props => props.theme.media.tabletHorizontal`
    border-radius: ${props => props.theme.size[450]};
  `}

  ${props => props.theme.media.tabletVertical`
    border-radius: ${props => props.theme.size[500]};
  `}

  ${props => props.theme.media.phone`
    border-radius: ${props => props.theme.size[550]};
  `}
`

const DeviceBackground = styled.div`
  grid-row-start: layout-body-margin-top;
  grid-row-end: layout-body-margin-bottom;
  grid-column-start: layout-body-margin-left;
  grid-column-end: layout-body-margin-right;
  background-color: ${props => props.isOff || props.isDarkMode
    ? props.theme.colors.black[900] 
    : props.theme.colors.black[100]
  };
  border-top: ${props => props.theme.size[100]} solid ${props => props.isOff || props.isDarkMode
    ? props.theme.colors.black[800] 
    : props.theme.colors[props.color][props.colorWeight]
  };
  border-bottom: ${props => props.theme.size[100]} solid ${props => props.isOff || props.isDarkMode
    ? props.theme.colors.black[800] 
    : props.theme.colors[props.color][props.colorWeight]
  };
  will-change: border-top, background-color;
  transition: border-top .2s ease-out, background-color .2s ease-out;

${props => props.theme.media.tabletHorizontal`
    border-width: ${props.theme.size[200]};
  `}
`

const LockLogo = styled(Logo)`
  position: relative;
  grid-area: layout-body;
  width: ${props => props.theme.size[700]};
  margin: auto;
  cursor: pointer;

  ${props => props.theme.media.tabletVertical`
    width: ${props => props.theme.size[750]};
  `}
`

const detailContainer = css`
  display: grid;
  grid-template-rows: ${props => props.theme.size[500]};
  padding: ${props => `${props.theme.size[300]} ${props.theme.size[400]}`};
  font-size: ${props => props.theme.size[350]};
  text-transform: uppercase;
  color: ${props => props.isDarkMode
    ? props.theme.colors.black[700]
    : props.theme.colors.black[500]};

  ${props => props.theme.media.tabletHorizontal`
    padding: ${props => `${props.theme.size[400]} ${props.theme.size[450]}`};
    grid-template-rows: ${props => props.theme.size[500]};
    font-size: ${props => props.theme.size[400]};
    font-weight: 600;
  `}

  ${props => props.theme.media.phone`
    padding: ${props => props.theme.size[450]};
    grid-template-rows: ${props => props.theme.size[600]};
    font-size: ${props => props.theme.size[450]};
  `}
`

const DeviceHeader = styled.header`
  ${detailContainer}
  grid-template-columns: 1fr 1fr 1fr;
`

const DeviceFooter = styled.footer`
  ${detailContainer}
`

const DeviceHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const DeviceHeaderIcon = styled(Icon)`
  place-self: center;
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
  height: ${props => props.theme.size[350]};

  ${props => props.theme.media.tabletHorizontal`
    height: ${props => props.theme.size[400]};
  `}

  ${props => props.theme.media.phone`
    height: ${props => props.theme.size[500]};
  `}

  &:hover {
    color: inherit;
  }

  svg {
    margin-right: ${props => props.theme.size[200]};
  }
`

const DeviceNavIcon = styled(Icon)``

const DeviceBody = styled.main`
  display: flex;
  padding: ${props => `${props.theme.size[350]}`} ${props => `${props.theme.size[450]}`};
  align-items: stretch;
  justify-content: stretch;
  flex-direction: column;
  flex-grow: 1;
`

export default props => {
  const { children, navTitle, navTo, detail, hasBanner, icon, footer, page } = props
  const [{ isDarkMode }] = useSettings()
  const [{ isOff }, setDevice] = useDevice()
  const hasHeader = !!(navTitle || detail || icon || page.icon)
  const hasFooter = !!footer
  useDeviceEffect()

  return (
    <>
      <DeviceBlob {...page} isFlipped={hasBanner} />
      <DeviceBackground isOff={isOff} {...page} />
      <LockButton />
      {!detail && <Charger />}
      <Device isOff={isOff} isDarkMode={isDarkMode}>
        {hasHeader && (
          <DeviceHeader isDarkMode={isDarkMode}>
            {!isOff && (
              <>
                <DeviceHeaderNav>
                  {navTitle
                  ? (
                    <DeviceNav to={navTo}>
                      <DeviceNavIcon name='chevron-left' />
                      {navTitle}
                    </DeviceNav>
                  )
                  : <Network />}
                </DeviceHeaderNav>
                <DeviceHeaderIcon name={icon || page.icon} />
                <DeviceHeaderAction>
                  {detail || <Battery /> }
                </DeviceHeaderAction>
              </>
            )}
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
