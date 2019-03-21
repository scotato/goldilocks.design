import React from 'react'
import { useSettings, usePage, useDevice } from '../hooks/state'
import styled from 'styled-components'

import { BlobAnimated } from './Blob'

const Background = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  border-top: ${props => props.theme.size.layout[100]} solid ${props => props.isOff || props.isDarkMode
    ? props.theme.colors.black[800] 
    : props.theme.colors[props.color][props.colorWeight]
  };
  background-color: ${props => props.isOff || props.isDarkMode
    ? props.theme.colors.black[900] 
    : props.theme.colors.black[100]
  };
  will-change: border-top, background-color;
  transition: border-top .2s ease-out, background-color .2s ease-out;
  z-index: 0;
  transform: rotate(${props => props.isFlipped ? 180 : 0}deg);
`

const BackgroundBlob = styled(BlobAnimated).attrs({
  color: props => props.isOff
    ? props.theme.colors.black[800] 
    : props.theme.colors[props.color][props.colorWeight]
})`
  height: ${props => props.theme.size.layout[600]};
`

export default props => {
  const [{ isDarkMode }] = useSettings()
  const [{ color, colorWeight }] = usePage()
  const [{ isOff }] = useDevice()
  const backgroundProps = {
    color,
    colorWeight,
    isDarkMode,
    isOff,
    isFlipped: props.isFlipped
  }

  return (
    <Background {...backgroundProps}>
      <BackgroundBlob {...backgroundProps} />
    </Background>
  )
}
