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
  display: block;
  margin: 0 ${props => props.theme.size.layout[300]};
  transform: translateY(${getChargerPosition});
  transition: transform .2s ease-out;
  will-change: transform;

  ${props => props.theme.media.tabletHorizontal`
    margin: 0 ${props => props.theme.size.layout[400]};
    transform: translateY(${getChargerPositionTablet});
  `}
`

const ChargerContainer = styled.div`
  width: ${props => props.theme.size.layout[500]};
  height: ${props => props.theme.size.layout[500]};
  grid-area: layout-body-margin-bottom;
  justify-self: center;
  overflow: hidden;
  cursor: pointer;

  ${props => props.theme.media.tabletHorizontal`
    width: ${props => props.theme.size.layout[600]};
    height: ${props => props.theme.size.layout[600]}
  `}

  &:before {
    content: " ";
    display: block;
    position: absolute;
    width: ${props => props.theme.size.layout[500]};
    height: ${props => props.theme.size.layout[500]};

    ${props => props.theme.media.tabletHorizontal`
    width: ${props => props.theme.size.layout[600]};
    height: ${props => props.theme.size.layout[600]};
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
