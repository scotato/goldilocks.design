import React from 'react'
import { useSettings, useDevice } from '../hooks/state'
import styled from 'styled-components'

import { BlobAnimated } from './Blob'

const DeviceBlob = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100%;
  max-height: 100vh;
  overflow: hidden;
  z-index: 0;
  transform: rotate(${props => props.isFlipped ? 180 : 0}deg);
`

const BackgroundBlob = styled(BlobAnimated).attrs({
  color: props => props.isOff
    ? props.theme.colors.black[800] 
    : props.theme.colors[props.color][props.colorWeight]
})`
  height: ${props => props.theme.size[600]};
`

export default props => {
  const [{ isDarkMode }] = useSettings()
  const [{ isOff }] = useDevice()
  const backgroundProps = {
    color: props.color,
    colorWeight: props.colorWeight,
    isDarkMode,
    isOff,
    isFlipped: props.isFlipped
  }

  return (
    <DeviceBlob {...backgroundProps}>
      <BackgroundBlob {...backgroundProps} />
    </DeviceBlob>
  )
}
