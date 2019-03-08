import React from 'react'
import styled from 'styled-components'
import { useDevice } from '../hooks'

import ChargerSVG from '../content/brand/device-charger.svg'

const getChargerPosition = props => {
  if (props.isOff) {
    return `${props.theme.size.layout[400]}`
  } else if (props.isCharging) {
    return `-${props.theme.size.layout[350]}`
  } else {
    return `${props.theme.size.layout[300]}`
  }
}

const getChargerPositionTablet = props => {
  if (props.isOff) {
    return `${props.theme.size.layout[500]}`
  } else if (props.isCharging) {
    return `-${props.theme.size.layout[450]}`
  } else {
    return `${props.theme.size.layout[400]}`
  }
}

const Charger = styled(ChargerSVG)`
  transform: translateY(${getChargerPosition});
  transition: transform .2s ease-out;
  will-change: transform;

  ${props => props.theme.media.tabletHorizontal`
    transform: translateY(${getChargerPositionTablet});
  `}
`

const ChargerContainer = styled.div`
  position: absolute;
  padding: 0 ${props => props.theme.size.layout[300]};
  justify-self: center;
  bottom: 0;
  width: ${props => props.theme.size.layout[500]};
  height: ${props => props.theme.size.layout[400]};
  overflow: hidden;
  cursor: pointer;

  ${props => props.theme.media.tabletHorizontal`
    padding: 0 ${props => props.theme.size.layout[400]};
    width: ${props => props.theme.size.layout[600]};
    height: ${props => props.theme.size.layout[500]};
  `}
`

export default () => {
  const [{ isOff, isCharging}, setDevice] = useDevice()

  return (
    <ChargerContainer onClick={() => setDevice.isCharging(!isCharging)}>
      <Charger isCharging={isCharging} isOff={isOff} />
    </ChargerContainer>
  )
}
