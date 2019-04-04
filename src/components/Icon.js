import React from 'react'
import styled, { css } from 'styled-components'
import Battery from '../content/icons/battery.svg'
import Cellular from '../content/icons/cellular.svg'
import Lock from '../content/icons/lock.svg'
import Wifi from '../content/icons/wifi.svg'
import Bolt from '../content/icons/bolt.svg'
import Home from '../content/icons/home.svg'
import FaBell from '../content/icons/fa-bell.svg'
import FaBookOpen from '../content/icons/fa-book-open.svg'
import FaBracketsCurly from '../content/icons/fa-brackets-curly.svg'
import FaPencilRuler from '../content/icons/fa-pencil-ruler.svg'
import FaComment from '../content/icons/fa-comment.svg'
import FaMusic from '../content/icons/fa-music.svg'
import FaPlay from '../content/icons/fa-play.svg'
import FaCog from '../content/icons/fa-cog.svg'
import FaGithub from '../content/icons/fa-github.svg'
import FaTwitter from '../content/icons/fa-twitter.svg'
import FaLink from '../content/icons/fa-link.svg'
import ChevronLeft from '../content/icons/chevron-left.svg'
import List from '../content/icons/list.svg'
import Grid from '../content/icons/grid.svg'
import Card from '../content/icons/card.svg'
import Plus from '../content/icons/plus.svg'
import Plug from '../content/icons/plug.svg'
import Api from '../content/icons/api.svg'
import RSS from '../content/icons/rss.svg'
import Goldilocks from '../content/brand/goldilocks-logo-knot-yellow.svg'
import GoldilocksWhite from '../content/brand/goldilocks-logo-knot-white.svg'
import GoldilocksDark from '../content/brand/goldilocks-logo-knot-dark.svg'
import GoldilocksBlack from '../content/brand/goldilocks-logo-knot-black.svg'
import GoldilocksSolid from '../content/brand/goldilocks-logo-knot-black-solid.svg'

const fillContainer = css`
  height: 100%;
`

const icon = css`
  ${fillContainer}

  path, circle {
    fill: currentColor;
  }
`

const logo = css`
  ${fillContainer}
`

export const IconGoldilocks = styled(Goldilocks)`${logo}`
export const IconGoldilocksWhite = styled(GoldilocksWhite)`${logo}`
export const IconGoldilocksDark = styled(GoldilocksDark)`${logo}`
export const IconGoldilocksBlack = styled(GoldilocksBlack)`${logo}`
export const IconGoldilocksSolid = styled(GoldilocksSolid)`${logo}`
export const IconBattery = styled(Battery)`${icon}`
export const IconCellular = styled(Cellular)`${icon}`
export const IconLock = styled(Lock)`${icon}`
export const IconWifi = styled(Wifi)`${icon}`
export const IconBolt = styled(Bolt)`${icon}`
export const IconHome = styled(Home)`${icon}`
export const IconChevronLeft = styled(ChevronLeft)`${icon}`
export const IconList = styled(List)`${icon}`
export const IconGrid = styled(Grid)`${icon}`
export const IconCard = styled(Card)`${icon}`
export const IconPlus = styled(Plus)`${icon}`
export const IconPlug = styled(Plug)`${icon}`
export const IconApi = styled(Api)`${icon}`
export const IconRSS = styled(RSS)`${icon}`
export const IconFaBell = styled(FaBell)`${icon}`
export const IconFaBookOpen = styled(FaBookOpen)`${icon}`
export const IconFaBracketsCurly = styled(FaBracketsCurly)`${icon}`
export const IconFaPencilRuler = styled(FaPencilRuler)`${icon}`
export const IconFaComment = styled(FaComment)`${icon}`
export const IconFaMusic = styled(FaMusic)`${icon}`
export const IconFaPlay = styled(FaPlay)`${icon}`
export const IconFaCog = styled(FaCog)`${icon}`
export const IconFaLink = styled(FaLink)`${icon}`
export const IconFaGithub = styled(FaGithub)`${icon}`
export const IconFaTwitter = styled(FaTwitter)`${icon}`

const icons = {
  goldilocks: IconGoldilocks,
  'goldilocks-white': IconGoldilocksWhite,
  'goldilocks-dark': IconGoldilocksDark,
  'goldilocks-black': IconGoldilocksBlack,
  'goldilocks-solid': IconGoldilocksSolid,
  battery: IconBattery,
  cellular: IconCellular,
  lock: IconLock,
  wifi: IconWifi,
  bolt: IconBolt,
  home: IconHome,
  list: IconList,
  grid: IconGrid,
  card: IconCard,
  plus: IconPlus,
  plug: IconPlug,
  api: IconApi,
  rss: IconRSS,
  'chevron-left': IconChevronLeft,
  'fa-book-open': IconFaBookOpen,
  'fa-bell': IconFaBell,
  'fa-brackets-curly': IconFaBracketsCurly,
  'fa-pencil-ruler': IconFaPencilRuler,
  'fa-comment': IconFaComment,
  'fa-music': IconFaMusic,
  'fa-play': IconFaPlay,
  'fa-cog': IconFaCog,
  'fa-link': IconFaLink,
  'fa-github': IconFaGithub,
  'fa-twitter': IconFaTwitter,
}

export default ({name, ...props}) => {
  const hasIcon = Object.keys(icons).includes(name)
  const Icon = hasIcon ? icons[name] : IconFaCog
  return <Icon {...props } />
}