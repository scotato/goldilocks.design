import React from 'react'
import styled from 'styled-components'
import ChevronLeft from '../icons/chevron-left.svg'
import ChevronRight from '../icons/chevron-right.svg'
import Github from '../icons/github.svg'
import Twitter from '../icons/twitter.svg'
import Wikipedia from '../icons/wikipedia.svg'
import RSS from '../icons/rss.svg'

const IconSwitch = props => {
  switch (props.name) {
    case "chevron-left":
      return <ChevronLeft />
    case "chevron-right":
        return <ChevronRight />
    case "github":
      return <Github />
    case "twitter":
        return <Twitter />
    case "wikipedia":
      return <Wikipedia />
    case "rss":
      return <RSS />
    default:
      return null
  }
}

const Icon = styled.div`
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
  <Icon size={size}>
    <IconSwitch name={props.name} />
  </Icon>
)
