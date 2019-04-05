import React from 'react'
import styled from 'styled-components'
import { useDevice } from '../hooks'

import { ButtonBase } from './Button'
import ChargerSVG from '../content/brand/device-charger.svg'

const getChargerPosition = props => {
  if (props.isOff) {
    return `${props.theme.size[400]}`
  } else if (props.isCharging) {
    return `-${props.theme.size[350]}`
  } else {
    return `${props.theme.size[300]}`
  }
}

const getChargerPositionTablet = props => {
  if (props.isOff) {
    return `${props.theme.size[500]}`
  } else if (props.isCharging) {
    return `-${props.theme.size[450]}`
  } else {
    return `${props.theme.size[400]}`
  }
}

const Charger = styled(ChargerSVG)`
  display: block;
  /* position: absolute; */
  margin: 0 auto;
  width: ${props => props.theme.size[400]};
  /* height: 100%; */
  transform: translateY(${getChargerPosition});
  transition: transform .2s ease-out;
  will-change: transform;

  ${props => props.theme.media.tabletHorizontal`
    width: ${props => props.theme.size[500]};
    transform: translateY(${getChargerPositionTablet});
  `}
`

const ChargerContainer = styled(ButtonBase)`
  display: block;
  position: relative;
  height: ${props => props.theme.size[400]};
  grid-area: layout-body-margin-bottom;
  justify-self: center;
  overflow: hidden;
  cursor: pointer;

  ${props => props.theme.media.tabletHorizontal`
    width: ${props => props.theme.size[600]};
    height: ${props => props.theme.size[500]};
  `}

  &:before {
    content: " ";
    display: block;
    position: absolute;
    width: ${props => props.theme.size[500]};
    height: ${props => props.theme.size[500]};
    top: 0;
    left: 0;

    ${props => props.theme.media.tabletHorizontal`
    width: ${props => props.theme.size[600]};
    height: ${props => props.theme.size[500]};
  `}
  }
`

export default () => {
  const [{ isOff, isCharging}, setDevice] = useDevice()

  return (
    <ChargerContainer onClick={() => setDevice.isCharging(!isCharging)}>
      <Charger isCharging={isCharging} isOff={isOff} />
    </ChargerContainer>
  )
}
