import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Indicator from './Indicator'

const PostIndicators = styled.div`
  display: flex;
`

export default props => {
  const { createdAt, updatedAt, timeToRead } = props.post

  return (
    <PostIndicators>
      <Indicator 
        icon="calendar"
        color="default"
        title={updatedAt ? 'Updated' : 'Created'}
        badge={moment(updatedAt || createdAt).format("MMM YYYY")}
      />

      <Indicator 
        icon="book-open"
        color="default"
        title="Read"
        badge={`${timeToRead} minute read`}
      />
    </PostIndicators>
  )
}
