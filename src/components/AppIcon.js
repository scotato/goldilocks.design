import React, { useState } from 'react'
import styled from 'styled-components'

import Link from './Link'
import Icon from './Icon'

const Badge = styled.div`
  display: flex;
  padding: 15%;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.black[100]};
  width: 100%;
  border-radius: ${props => props.isCircle ? props.theme.size[900] : '30%'};
  background-color: ${props => props.theme.colors[props.color][props.colorWeight]};
  transform: scale(${props => props.isMouseDown ? 0.975 : 1});
  transition: transform .1s ease-out;
  will-change: transform;
  line-height: 1;

  svg {
    width: 100%;
  }
`

const AppTitle = styled.span`
  margin-top: ${props => props.theme.size[300]};
  color:  ${props => props.theme.colors.black[500]};
  text-transform: uppercase;
  line-height: 1;
  text-align: center;

  ${props => props.theme.media.tabletVertical`
    font-size: ${props => props.theme.size[400]};
  `}

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size[500]};
  `}
`

const AppIcon = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  svg {
    width: 100%;
  }

  &:hover {
    color: inherit;
  }
`

const AppNotification = styled.span`
  position: absolute;
  display: ${props => props.children ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  top: -${props => props.theme.size[400]};
  right: -${props => props.theme.size[400]};
  color: ${props => props.theme.colors.black[100]};
  background-color: ${props => props.theme.colors.red[500]};
  width: ${props => props.theme.size[500]};
  height: ${props => props.theme.size[500]};
  border: ${props => props.theme.size[200]} solid ${props => props.theme.colors.black[100]};
  font-weight: 700;
  border-radius: 100%;
`

export const AppBadge = ({icon, children, ...props}) =>
  <Badge {...props}>
    {icon ? <Icon name={icon} /> : children}
  </Badge>

export default ({color = 'black', colorWeight = 200, title, icon, to, notifications, children, ...props}) => {
  const [isMouseDown, setIsMouseDown] = useState(false)

  return (
    <AppIcon
      to={to}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseOut={() => setIsMouseDown(false)}
      {...props}
    >
      <AppBadge
        icon={icon}
        color={color}
        colorWeight={colorWeight}
        isMouseDown={isMouseDown}
        children={children}
      />
      {title && <AppTitle children={title} />}
      <AppNotification children={notifications} />
    </AppIcon>
  )
}
