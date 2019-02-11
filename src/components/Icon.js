import React from 'react'
import styled, { css } from 'styled-components'
import Battery from '../icons/battery.svg'
import Cellular from '../icons/cellular.svg'
import Lock from '../icons/lock.svg'
import Wifi from '../icons/wifi.svg'
import Bolt from '../icons/bolt.svg'
import Home from '../icons/home.svg'
import Notifications from '../icons/fa-bell.svg'
import Blog from '../icons/fa-book-open.svg'
import Projects from '../icons/fa-brackets-curly.svg'
import Tools from '../icons/fa-pencil-ruler.svg'
import Messages from '../icons/fa-comment.svg'
import Music from '../icons/fa-music.svg'
import Videos from '../icons/fa-play.svg'
import Settings from '../icons/fa-cog.svg'

const icon = css`
  max-width: 100%;
  max-height: 100%;

  path {
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
  settings: IconSettings
}

export default ({name, ...props}) => {
  const hasIcon = Object.keys(icons).includes(name)
  const Icon = hasIcon ? icons[name] : IconSettings
  return <Icon {...props } />
}