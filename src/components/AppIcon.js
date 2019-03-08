import React, { useState } from 'react'
import styled from 'styled-components'

import Link from './Link'
import Icon from './Icon'

const Badge = styled.div`
  display: flex;
  padding: 10%;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.black[100]};
  width: 100%;
  border-radius: 33%;
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
  margin-top: ${props => props.theme.size.layout[300]};
  color:  ${props => props.theme.colors.black[500]};
  font-size:  ${props => props.theme.size.typography[300]};
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
`

const AppIcon = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: ${props => props.theme.size.layout[300]} ${props => props.theme.size.layout[400]}; */
  /* width: ${props => props.theme.size.layout[600]}; */
  
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
