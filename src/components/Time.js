import { useState, useEffect } from 'react'
import moment from 'moment'

const getTime = (format = 'h:mm A MMM D') => moment().format(format)

export default props => {
  const [time, setTime] = useState(getTime(props.format))
  
  useEffect(() => {
    const timer = setInterval(() => setTime(getTime(props.format)), 1000)
    return () => clearInterval(timer)
  })

  return time
}
