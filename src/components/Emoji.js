import React from 'react'
import styled from 'styled-components'

import Bell from '../emoji/twemoji-1f514.svg'
import Thought from '../emoji/twemoji-1f4ad.svg'
import Heart from '../emoji/twemoji-2764.svg'
import Clover from '../emoji/twemoji-1f340.svg'

const EmojiSwitch = props => {
  switch (props.name) {
    case "bell":
      return <Bell />
    case "thought":
        return <Thought />
    case "heart":
        return <Heart />
    case "clover":
        return <Clover />
    default:
      return null
  }
}

const Emoji = styled.div`
  display: grid;
  width: ${props => props.theme.size[props.size]};
  height: ${props => props.theme.size[props.size]};
  place-items: center;
  line-height: 1;

  .fa-secondary {
    opacity: 0.5;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

export default ({ size = 500, ...props }) => (
  <Emoji size={size} {...props}>
    <EmojiSwitch name={props.name} />
  </Emoji>
)