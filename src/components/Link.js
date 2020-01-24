import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const LinkInternal = styled(Link)``
const LinkExternal = styled.a``

export default ({to, ...props}) => to.includes('http') ? (
  <LinkExternal href={to} target="_blank" {...props} />
  ) : (
  <LinkInternal to={to} activeClassName='active' {...props} />
)