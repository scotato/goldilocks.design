import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

export default props => {
  const { color, grayscale, size } = useContext(ThemeContext)

  return (
    <Switch
      width={64}
      height={32}
      handleDiameter={28}
      onColor={color.green.hex}
      offColor={grayscale.hex}
      activeBoxShadow={`0 0 ${size[100]} ${size[100]} ${color.info}`}
      checkedIcon={false}
      uncheckedIcon={false}
      {...props}
    />
  )
} 
