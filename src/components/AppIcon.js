import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Link from './Link'
import Icon from './Icon'

const AppBadge = styled.div`
  padding: ${props => props.theme.size.layout[250]};
  width: ${props => props.theme.size.layout[600]};
  color: ${props => props.theme.colors.black[100]};
  border-radius: ${props => props.theme.size.layout[400]};
  background-color: ${props => props.theme.colors[props.color][props.colorWeight]};
  transform: scale(${props => props.isMouseDown ? 0.975 : 1});
  transition: transform .1s ease-out;
  will-change: transform;
`

const AppTitle = styled.span`
  margin-top: ${props => props.theme.size.layout[300]};
  color:  ${props => props.theme.colors.black[500]};
  text-transform: uppercase;
  line-height: 1;
`

const AppIcon = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.theme.size.layout[400]};
  margin-top: ${props => props.theme.size.layout[300]};
  width: ${props => props.theme.size.layout[600]};

  &:hover {
    color: inherit;
  }
`

const AppNotification = styled.span`
  position: absolute;
  display: ${props => props.children ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  top: -${props => props.theme.size.layout[400]};
  right: -${props => props.theme.size.layout[400]};
  color: ${props => props.theme.colors.black[100]};
  background-color: ${props => props.theme.colors.red[500]};
  width: ${props => props.theme.size.layout[500]};
  height: ${props => props.theme.size.layout[500]};
  border: ${props => props.theme.size.layout[200]} solid ${props => props.theme.colors.black[100]};
  font-weight: 700;
  border-radius: 100%;
`

export default ({color = 'black', colorWeight = 500, title, icon, to, notifications, ...props}) => {
  const [isMouseDown, setIsMouseDown] = useState(false)

  return (
    <AppIcon
      to={to}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseOut={() => setIsMouseDown(false)}
      {...props}
    >
      <AppBadge
        color={color}
        colorWeight={colorWeight}
        isMouseDown={isMouseDown}
      >
        <Icon name={icon} />
      </AppBadge>
      <AppTitle children={title} />
      <AppNotification children={notifications} />
    </AppIcon>
  )
}
