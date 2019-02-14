import React from 'react'
import styled, { css } from 'styled-components'
import Battery from '../content/icons/battery.svg'
import Cellular from '../content/icons/cellular.svg'
import Lock from '../content/icons/lock.svg'
import Wifi from '../content/icons/wifi.svg'
import Bolt from '../content/icons/bolt.svg'
import Home from '../content/icons/home.svg'
import Notifications from '../content/icons/fa-bell.svg'
import Blog from '../content/icons/fa-book-open.svg'
import Projects from '../content/icons/fa-brackets-curly.svg'
import Tools from '../content/icons/fa-pencil-ruler.svg'
import Messages from '../content/icons/fa-comment.svg'
import Music from '../content/icons/fa-music.svg'
import Videos from '../content/icons/fa-play.svg'
import Settings from '../content/icons/fa-cog.svg'
import ChevronLeft from '../content/icons/chevron-left.svg'
import List from '../content/icons/list.svg'
import Grid from '../content/icons/grid.svg'
import Card from '../content/icons/card.svg'
import Plus from '../content/icons/plus.svg'
import Goldilocks from '../content/brand/goldilocks-logo-knot-yellow.svg'

const fillContainer = css`
  height: 100%;
`

const icon = css`
 ${fillContainer}

  path, circle {
    fill: currentColor;
  }
`

export const IconBattery = styled(Battery)`${icon}`
export const IconCellular = styled(Cellular)`${icon}`
export const IconLock = styled(Lock)`${icon}`
export const IconWifi = styled(Wifi)`${icon}`
export const IconBolt = styled(Bolt)`${icon}`
export const IconHome = styled(Home)`${icon}`
export const IconNotifications = styled(Notifications)`${icon}`
export const IconBlog = styled(Blog)`${icon}`
export const IconProjects = styled(Projects)`${icon}`
export const IconTools = styled(Tools)`${icon}`
export const IconMessages = styled(Messages)`${icon}`
export const IconMusic = styled(Music)`${icon}`
export const IconVideos = styled(Videos)`${icon}`
export const IconSettings = styled(Settings)`${icon}`
export const IconChevronLeft = styled(ChevronLeft)`${icon}`
export const IconList = styled(List)`${icon}`
export const IconGrid = styled(Grid)`${icon}`
export const IconCard = styled(Card)`${icon}`
export const IconPlus = styled(Plus)`${icon}`
export const IconGoldilocks = styled(Goldilocks)`${fillContainer}`

const icons = {
  battery: IconBattery,
  cellular: IconCellular,
  lock: IconLock,
  wifi: IconWifi,
  bolt: IconBolt,
  home: IconHome,
  notifications: IconNotifications,
  blog: IconBlog,
  projects: IconProjects,
  tools: IconTools,
  messages: IconMessages,
  music: IconMusic,
  videos: IconVideos,
  settings: IconSettings,
  'chevron-left': IconChevronLeft,
  list: IconList,
  grid: IconGrid,
  card: IconCard,
  plus: IconPlus,
  goldilocks: IconGoldilocks
}

export default ({name, ...props}) => {
  const hasIcon = Object.keys(icons).includes(name)
  const Icon = hasIcon ? icons[name] : IconSettings
  return <Icon {...props } />
}