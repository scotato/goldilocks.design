import React from 'react'
import { Link as LinkGatsby } from 'gatsby'
import styled from 'styled-components'
import Icon from './Icon'

const LinkInternal = styled(LinkGatsby)``
const LinkExternal = styled.a``

const BackLink = styled(LinkGatsby)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${props => props.theme.size[300]};
  align-items: baseline;
  font-weight: 500;

  svg {
    transform: scale(1.25);
  }
`

export const Back = props =>
  <BackLink to={props.to}>
    <Icon name="chevron-left" /> {props.children || 'Back'}
  </BackLink>

const Link = ({to, ...props}) => to.includes('http') ? (
    <LinkExternal href={to} target="_blank" {...props} />
  ) : (
    <LinkInternal to={to} activeClassName='active' {...props} />
)

export const LinkIcon = ({icon, to, size}) => to ? (
  <Link to={to}>
    <Icon name={icon} size={size} />
  </Link>
) : null

export default Link
