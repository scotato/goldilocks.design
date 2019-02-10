import styled, { css } from 'styled-components'
import Battery from '../icons/battery.svg'
import Cellular from '../icons/cellular.svg'
import Lock from '../icons/lock.svg'
import Wifi from '../icons/wifi.svg'
import Bolt from '../icons/bolt.svg'
import Home from '../icons/home.svg'

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
