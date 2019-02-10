import styled, { css } from 'styled-components'
import { IconCellular, IconWifi, IconBattery } from './Icon'

const isActive = i => props =>
  props.level >= i
    ? props.theme.colors.black[400]
    : props.theme.colors.black[200]

const bar = i => css`
  .bar-${i} {
    fill: ${isActive(i)};
  }
`

const indicator = css`
  path {
    transition: fill .2s ease-out;
    will-change: fill;
  }

  ${bar(1)}
  ${bar(2)}
  ${bar(3)}
  ${bar(4)}
  ${bar(5)}
`

export const IndicatorCellular = styled(IconCellular)`${indicator}`
export const IndicatorWifi = styled(IconWifi)`${indicator}`
export const IndicatorBattery = styled(IconBattery)`${indicator}`
