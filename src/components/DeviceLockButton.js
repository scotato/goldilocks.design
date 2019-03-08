import React, { useState } from 'react'
import styled from 'styled-components'
import { navigate } from "gatsby"

import { useSettings, useDevice } from '../hooks'
import LockButtonSVG from '../content/brand/device-lock-button.svg'
import { ButtonBase } from './Button'

const LockButton = styled(ButtonBase).attrs({
  children: <LockButtonSVG />
})`
  position: absolute;
  margin-right: ${props => props.theme.size.layout[300]};
  padding: ${props => props.theme.size.layout[200]};
  padding-left: 0;
  top: ${props => props.theme.size.layout[550]};
  right: ${props => props.theme.size.layout[550]};
  width: ${props => props.theme.size.layout[300]};
  /* grid-area: layout-body-margin-bottom; */

  ${props => props.theme.media.tabletHorizontal`
    margin-right: ${props => props.theme.size.layout[200]};
    padding: ${props => props.theme.size.layout[300]};
    top: ${props => props.theme.size.layout[650]};
    right: ${props => props.theme.size.layout[100]};
    width: ${props => props.theme.size.layout[400]};
  `}

  svg {
    transform: translateX(${props => props.isMouseDown ? -2 : 0}px);
    transition: transform .2s ease-out;
    will-change: transform;
  }

  .bar-1,
  .bar-2
  {
    will-change: fill;
    transition: fill .2s ease-out;
    fill: ${props => props.isDeviceOff || props.isDarkMode
      ? props.theme.colors.black[800] 
      : props.theme.colors.black[200]
    };
  }
`

export default () => {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [{ isDarkMode }] = useSettings()
  const [{ isOff }, setDevice] = useDevice()

  return (
    <LockButton
      isDeviceOff={isOff}
      isDarkMode={isDarkMode}
      isMouseDown={isMouseDown}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseOut={() => setIsMouseDown(false)}
      onMouseUp={() => setIsMouseDown(false)}
      onClick={() => {
        setDevice.isOff(!isOff)
        !isOff && navigate('/')
      }}
    />
  )
}
