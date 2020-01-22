import React from 'react'
import styled from 'styled-components'

import Coffee from '../emoji/twemoji-2615.svg'
import Tea from '../emoji/twemoji-1f375.svg'
import Soda from '../emoji/twemoji-1f964.svg'
import LightningBolt from '../emoji/twemoji-26a1.svg'

const EmojiSwitch = props => {
  switch (props.name) {
    case "coffee":
      return <Coffee />
    case "tea":
        return <Tea />
    case "soda":
        return <Soda />
    case "lightning-bolt":
        return <LightningBolt />
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