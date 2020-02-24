import React from 'react'
import { Link as LinkGatsby } from 'gatsby'
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

const LinkExternal = styled.a`
  ${link}
`

const BackLink = styled(LinkGatsby)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${props => props.theme.size[300]};
  align-items: center;
  font-weight: 500;
  ${link}

  &:focus {
    text-decoration: underline;
  }
`

const isActive = ({ isCurrent, isPartiallyCurrent }) => {
  return isCurrent || isPartiallyCurrent ? { "data-active": "active" } : null
}

export const Back = props =>
  <BackLink to={props.to}>
    <Icon name="chevron-left" /> {props.children || 'Back'}
  </BackLink>

const Link = ({to, ...props}) => to.includes('http') ? (
    <LinkExternal href={to} target="_blank" {...props} />
  ) : (
    <LinkInternal to={to} getProps={isActive} {...props} />
)

const LinkIconStyled = styled(Link)`
  &:focus {
    color: ${props => props.theme.color.blueDark};
  }
`

export const LinkIcon = ({icon, to, size}) => to ? (
  <LinkIconStyled to={to}>
    <Icon name={icon} size={size} />
  </LinkIconStyled>
) : null

export default Link
