import React from 'react'
import Icon from './Icon'

export default props => {
  const icons = [
    'battery-empty',
    'battery-quarter',
    'battery-half',
    'battery-three-quarters',
    'battery-full'
  ]

  return <Icon name={icons[Math.floor(props.level / 20)]} {...props} /> 
}
