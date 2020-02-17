import React from 'react'
import styled from 'styled-components'
import Indicator from './Indicator'

const PostIndicators = styled.div`
  display: flex;
`

export default props => {
  const { timeToRead } = props.post

  return (
    <PostIndicators>
      <Indicator 
        icon="book-open"
        color="yellow"
        title="Read"
        badge={`${timeToRead} minute read`}
      />
    </PostIndicators>
  )
}
