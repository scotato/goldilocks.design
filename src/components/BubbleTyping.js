import React from 'react'
import styled from 'styled-components'

import Bubble from './Bubble'

const Dot = styled.div`
  width: 10px;
  height: 10px;
  @keyframes pulse {
    0% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1.05);
    }
  }

  padding: 0;
  opacity: 0.5;
  background-color: ${props =>
    props.type === 'primary' ? 'white' : 'rgb(128, 128, 128)'};
  animation-name: pulse;
  animation-duration: 750ms;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &:nth-child(2) {
    animation-delay: ${props =>
    props.type === 'primary' ? '-250ms' : '-1250ms'};
  }

  &:nth-child(3) {
    animation-delay: ${props =>
    props.type === 'primary' ? '-500ms' : '-1000ms'};
  }
`

export default props => (
  <Bubble {...props}>
    <Dot {...props} />
    <Dot {...props} />
    <Dot {...props} />
  </Bubble>
)
