import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import Avatar from './Avatar'
import Bubble from './Bubble'
import BubbleTyping from './BubbleTyping'

const MessageGroup = styled.div`
  margin: 1.6rem 0 6.4rem;
  display: flex;
  align-items: center;
`

const MessageAvatar = styled(Avatar)`
  margin-right: 0.5rem;
`

const Flex = styled.div`
  flex-direction: column;
  align-items: ${props => props.isPrimary ? 'flex-end' : 'flex-start'};
  /* margin-right: ${props => props.isPrimary ? 0 : '33%'}; */
  /* margin-left: ${props => props.isPrimary ? '33%' : 0}; */
`

const Timestamp = styled.small`
  position: absolute;
  left: 1.25rem;
  bottom: -1.5rem;
  font-size: 12px;
  color: ${props => props.theme.colors.black[400]};
`

export default ({ type = 'secondary', ...props }) => {
  const isPrimary = type === 'primary'

  return (
    <MessageGroup
      flexDirection={isPrimary ? 'row-reverse' : 'row'}
      alignItems="flex-end"
    >
      <MessageAvatar fixed={props.avatar} author={props.author} />
      <Flex isPrimary={isPrimary}>
        {props.isTyping
          ? <BubbleTyping type={type} />
          : (
            <Bubble type={type}>
              {props.children}
              <Timestamp>{moment(props.timestamp).fromNow()}</Timestamp>
            </Bubble>
          )
        }
      </Flex>
    </MessageGroup>
  )
}
