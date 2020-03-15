import React from 'react'
import { Link as LinkGatsby } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import styled, { css } from 'styled-components'
import Icon from './Icon'

const link = css`
  &:focus {
    outline: none;
  }
`

const LinkInternal = styled(LinkGatsby)`
  ${link}
`

const LinkExternal = styled(OutboundLink)`
  ${link}
`

const isActive = ({ isCurrent, isPartiallyCurrent }) => {
  return isCurrent || isPartiallyCurrent ? { "data-active": "active" } : null
}

const Link = ({to, ...props}) => to.includes('http') ? (
    <LinkExternal href={to} target="_blank" rel="noopener noreferrer" {...props} />
  ) : (
    <LinkInternal to={to} getProps={isActive} {...props} />
)

const LinkIconStyled = styled(Link)`
  &:focus {
    color: inherit;
  }
`

export const LinkIcon = ({icon, to, size, fixedWidth}) => to ? (
  <LinkIconStyled to={to} fixedWidth={fixedWidth}>
    <Icon name={icon} size={size} />
  </LinkIconStyled>
) : null

export const Back = props => (
  <LinkIcon icon="chevron-left" size={600} fixedWidth {...props} />
)

export default Link
