import React from 'react'
import styled from 'styled-components'
import Archive from '../icons/archive.svg'
import Bells from '../icons/bells.svg'
import Bicycle from '../icons/bicycle.svg'
import BookOpen from '../icons/book-open.svg'
import Book from '../icons/book.svg'
import Calendar from '../icons/calendar.svg'
import CalendarEdit from '../icons/calendar-edit.svg'
import CalendarPlus from '../icons/calendar-plus.svg'
import ChevronLeft from '../icons/chevron-left.svg'
import ChevronRight from '../icons/chevron-right.svg'
import Construction from '../icons/construction.svg'
import DraftingCompass from '../icons/drafting-compass.svg'
import Github from '../icons/github.svg'
import Cogs from '../icons/cogs.svg'
import CodeBranch from '../icons/code-branch.svg'
import CodeCommit from '../icons/code-commit.svg'
import CodeMerge from '../icons/code-merge.svg'
import Comments from '../icons/comments.svg'
import ComputerClassic from '../icons/computer-classic.svg'
import ExternalLink from '../icons/external-link.svg'
import History from '../icons/history.svg'
import Moon from '../icons/moon.svg'
import MoonStars from '../icons/moon-stars.svg'
import PencilRuler from '../icons/pencil-ruler.svg'
import Rocket from '../icons/rocket.svg'
import RSS from '../icons/rss.svg'
import Tag from '../icons/tag.svg'
import Tools from '../icons/tools.svg'
import Twitter from '../icons/twitter.svg'
import Typewriter from '../icons/typewriter.svg'
import Wikipedia from '../icons/wikipedia.svg'
import Window from '../icons/window.svg'

const IconSwitch = props => {
  switch (props.name) {
    case "archive":
      return <Archive />
    case "bells":
      return <Bells />
    case "bicycle":
      return <Bicycle />
    case "book-open":
      return <BookOpen />
    case "book":
      return <Book />
    case "calendar":
      return <Calendar />
    case "calendar-edit":
      return <CalendarEdit />
    case "calendar-plus":
      return <CalendarPlus />
    case "chevron-left":
      return <ChevronLeft />
    case "chevron-right":
      return <ChevronRight />
    case "code-branch":
      return <CodeBranch />
    case "code-commit":
      return <CodeCommit />
    case "code-merge":
      return <CodeMerge />
    case "cogs":
      return <Cogs />
    case "comments":
      return <Comments />
    case "computer-classic":
      return <ComputerClassic />
    case "construction":
      return <Construction />
    case "drafting-compass":
      return <DraftingCompass />
    case "external-link":
      return <ExternalLink />
    case "history":
      return <History />
    case "github":
      return <Github />
    case "moon":
      return <Moon />
    case "moon-stars":
      return <MoonStars />
    case "pencil-ruler":
      return <PencilRuler />
    case "rocket":
      return <Rocket />
    case "rss":
      return <RSS />
    case "tag":
      return <Tag />
    case "tools":
      return <Tools />
    case "twitter":
      return <Twitter />
    case "typewriter":
      return <Typewriter />
    case "wikipedia":
      return <Wikipedia />
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
  will-change: color;
  transition: color 0.2s ease-out;

  .fa-secondary {
    opacity: 0.5;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

export default ({ size = 500, name, ...props }) => (
  <Icon size={size} {...props}>
    <IconSwitch name={name} />
  </Icon>
)
