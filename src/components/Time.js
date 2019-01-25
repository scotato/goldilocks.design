import React, { useState, useEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Time = styled.span`
`

const getTime = () => moment().format('h:mm A MMM D')

export default props => {
  const [time, setTime] = useState(getTime())
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  })

  return (
    <Time {...props}>{time}</Time>
  )
}
