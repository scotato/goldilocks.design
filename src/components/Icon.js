import React from 'react'
import styled from 'styled-components'
import ChevronLeft from '../icons/chevron-left.svg'
import ChevronRight from '../icons/chevron-right.svg'
import Github from '../icons/github.svg'
import Twitter from '../icons/twitter.svg'
import Wikipedia from '../icons/wikipedia.svg'
import RSS from '../icons/rss.svg'
import Bells from '../icons/bells.svg'
import ComputerClassic from '../icons/computer-classic.svg'
import Typewriter from '../icons/typewriter.svg'
import Window from '../icons/window.svg'

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
    case "bells":
      return <Bells />
    case "computer-classic":
      return <ComputerClassic />
    case "typewriter":
      return <Typewriter />
    case "window":
      return <Window />
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
