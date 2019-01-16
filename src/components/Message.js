import React from 'react'
import styled, { css } from 'styled-components'
import moment from 'moment'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Avatar from './Avatar'
import Bubble from './Bubble'

const Message = styled.div`
  display: grid;
  margin: 0 auto 3.2rem;
  grid-template-columns: 48px ${props => props.bubbleWidth || ''} 48px;
  grid-template-rows: auto auto;
  grid-column-gap: 8px;
  grid-template-areas: 
    "avatar bubbles ."
    ". timestamp .";
  justify-content: start;
`

const MessageBanner = styled(Img)``

const bubbles = css`
  display: flex;
  flex-direction: column;
  grid-area: bubbles;

  > * {
    border-radius: 0;
  }

  > *:first-child {
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }

  > *:last-child {
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }
`

const BubbleGroup = styled.div`
  ${bubbles}
`

const BubbleGroupLink = styled(Link)`
  ${bubbles}
`

const Bubbles = props => props.to
  ? <BubbleGroupLink {...props} />
  : <BubbleGroup {...props} />

const MessageAvatarLink = styled.a`
  width: 48px;
  height: 48px;
  align-self: flex-end;
  grid-area: avatar;
`

const MessageAvatar = props => (
  <MessageAvatarLink
    href={`https://twitter.com/${props.author}`}
    title={props.author}
    target="_blank"
  >
    <Avatar {...props} />
  </MessageAvatarLink>
)

const Timestamp = styled.small`
  margin: 0.5rem 1.25rem;
  grid-area: timestamp;
  font-size: 12px;
  color: ${props => props.theme.colors.black[300]};
`

export default ({children, banner, avatar, author, title, timestamp, timeToRead, to, ...props}) => (
  <Message {...props}>
    <MessageAvatar fixed={avatar} author={author} />
    <Bubbles to={to}>
      {banner && <MessageBanner fixed={banner} title={title} />}
      <Bubble>
        {children}
      </Bubble>
    </Bubbles>
    <Timestamp>{moment(timestamp).fromNow()} - {timeToRead} min read</Timestamp>
  </Message>
)
