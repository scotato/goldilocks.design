import React, { useState, useEffect } from 'react'
import Icon from './Icon'

export default props => {
  const [level, setLevel] = useState(4)
  const icons = [
    'battery-empty',
    'battery-quarter',
    'battery-half',
    'battery-three-quarters',
    'battery-full'
  ]
  
  useEffect(() => {
    const interval = setInterval(() => setLevel(
      level === 0 ? 4 : level -1
    ), 60 * 1000)
    return () => clearInterval(interval)
  })

  return <Icon name={icons[level]} {...props} /> 
}
