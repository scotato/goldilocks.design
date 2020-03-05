import React from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const icons = [
  'faArchive',
  'faAt',
  'faBookOpen',
  'faBook',
  'faCalendar',
  'faCalendarPlus',
  'faCarCrash',
  'faCheck',
  'faChevronLeft',
  'faChevronRight',
  'faCogs',
  'faComment',
  'faDraftingCompass',
  'faEnvelope',
  'faEnvelopeOpenText',
  'faExclamationCircle',
  'faExternalLinkAlt',
  'faFire',
  'faHammer',
  'faHistory',
  'faLink',
  'faMoon',
  'faPenAlt',
  'faPencilRuler',
  'faRss',
  'faRulerCombined',
  'faSearch',
  'faStar',
  'faTag',
  'faTools',
  'faUserAlt',
  'faWrench',
]

export const iconsBrand = [
  'faGithub',
  'faTwitter'
]

const Icon = styled.div`
  display: grid;
  place-items: center;
  line-height: 1;
  will-change: color;
  transition: color 0.2s ease-out;

  ${props => props.size && css`
    font-size: ${props.theme.size[props.size]};
    width: ${props.theme.size[props.size]};
  `}
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

export default ({ size, name, fixedWidth, ...props }) => (
  <Icon size={size} {...props}>
    <FontAwesomeIcon icon={iconSwitch(name)} fixedWidth={fixedWidth} />
  </Icon>
)
