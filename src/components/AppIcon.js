import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import Icon from './Icon'

const AppBadge = styled.div`
  padding: ${props => props.theme.size.layout[250]};
  width: ${props => props.theme.size.layout[600]};
  color: ${props => props.theme.colors.black[100]};
  border-radius: ${props => props.theme.size.layout[400]};
  background-color: ${props => props.theme.colors[props.color][props.colorWeight]};
`

const AppTitle = styled.span`
  text-transform: uppercase;
  color:  ${props => props.theme.colors.black[600]};
`

const AppIcon = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.theme.size.layout[400]};
  width: ${props => props.theme.size.layout[600]};

  &:hover {
    color: inherit;
  }
`

export default ({color = 'black', colorWeight = 500, title, icon, to, ...props}) => (
  <AppIcon to={to} {...props}>
    <AppBadge color={color} colorWeight={colorWeight}>
      <Icon name={icon} />
    </AppBadge>
    <AppTitle>{title}</AppTitle>
  </AppIcon>
)
