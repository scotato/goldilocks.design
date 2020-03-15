import React, { useContext } from 'react'
import ReactSwitch from 'react-switch'
import styled, { ThemeContext } from 'styled-components'

const Switch = styled(ReactSwitch)`
  display: block !important;
`

export default props => {
  const { color, grayscale, size } = useContext(ThemeContext)

  return (
    <Switch
      width={52}
      height={32}
      handleDiameter={28}
      onColor={color.greenHex}
      offColor={grayscale.hex}
      activeBoxShadow={`0 0 ${size[100]} ${size[100]} ${color.info}`}
      checkedIcon={false}
      uncheckedIcon={false}
      {...props}
    />
  )
} 
