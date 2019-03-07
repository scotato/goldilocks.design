import React, { useState } from 'react'
import styled from 'styled-components'

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

export default ({ onClick }) => {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [{ isDarkMode }] = useSettings()
  const [{ isOff }] = useDevice()

  return (
    <LockButton
      isDeviceOff={isOff}
      isDarkMode={isDarkMode}
      isMouseDown={isMouseDown}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseOut={() => setIsMouseDown(false)}
      onMouseUp={() => setIsMouseDown(false)}
      onClick={onClick}
    />
  )
}
