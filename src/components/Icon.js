import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const icons = [
  'faArchive',
  'faBookOpen',
  'faBook',
  'faCalendar',
  'faCalendarPlus',
  'faChevronLeft',
  'faChevronRight',
  'faCogs',
  'faDraftingCompass',
  'faFire',
  'faHammer',
  'faHistory',
  'faLink',
  'faMoon',
  'faPenAlt',
  'faPencilRuler',
  'faRss',
  'faRulerCombined',
  'faStar',
  'faTag',
  'faTools',
  'faWrench',
]

export const iconsBrand = [
  'faGithub',
  'faTwitter'
]

const Icon = styled.div`
  display: grid;
  font-size: ${props => props.theme.size[props.size]};
  width: ${props => props.theme.size[props.size]};
  place-items: center;
  line-height: 1;
  will-change: color;
  transition: color 0.2s ease-out;
`

const iconSwitch = icon => {
  switch (icon) {
    case 'github':
    case 'twitter':
      return ['fab', icon]
    default:
        return icon
  }
}

export default ({ size = 500, name, ...props }) => (
  <Icon size={size} {...props}>
    <FontAwesomeIcon icon={iconSwitch(name)} />
  </Icon>
)
