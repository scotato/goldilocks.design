import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Link from './Link'
import Icon from './Icon'

const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.black[100]};
  width: 100%;
  transform: scale(${props => props.isMouseDown ? 0.975 : 1});
  transition: transform .1s ease-out;
  will-change: transform;
  line-height: 1;

  ${props => props.isIcon && css`
    padding: ${props.theme.size[300]};
    border-radius: ${props.theme.size[400]};
    background-color: ${props => props.theme.colors[props.color][props.colorWeight]};

    ${props => props.theme.media.tabletVertical`
      padding: ${props.theme.size[350]};
      border-radius: ${props.theme.size[450]};
    `}

    ${props => props.theme.media.phone`
      padding: ${props.theme.size[450]};
      border-radius: ${props.theme.size[550]};
    `}
  `}

  ${props => props.isCircle && css`
    border-radius: ${props.theme.size[900]};

    ${props => props.theme.media.tabletVertical`
      padding: ${props.theme.size[300]};
    `}

    ${props => props.theme.media.phone`
      padding: ${props.theme.size[350]};
    `}
  `}

  .gatsby-image-wrapper {
    flex: 1
  }

  svg {
    width: 100%;
  }
`

const AppTitle = styled.span`
  margin-top: ${props => props.theme.size[300]};
  color:  ${props => props.theme.colors.black[500]};
  text-transform: uppercase;
  line-height: 1.25;
  text-align: center;
  font-size: ${props => props.theme.size[300]};

  ${props => props.theme.media.tabletVertical`
    font-size: ${props => props.theme.size[400]};
  `}

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size[450]};
  `}
`

const AppIcon = styled(Link)`
  position: relative;
  display: flex;
  margin: ${props => props.theme.size[400]} ${props => props.theme.size[300]};
  padding-top: ${props => props.theme.size[400]};
  flex-direction: column;
  align-items: center;
  width: ${props => props.theme.size[600]};
  
  svg {
    width: 100%;
  }

  &:hover {
    color: inherit;
  }

  ${props => props.theme.media.tabletVertical`
    width: ${props => props.theme.size[650]};
  `}

  ${props => props.theme.media.phone`
    margin: ${props => props.theme.size[350]} ${props => props.theme.size[450]};
    width: ${props => props.theme.size[750]};
  `}
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

export const Apps = styled.div`
  display: flex;
  margin: auto;
  padding: 0 ${props => props.theme.size[400]};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  justify-self: center;
`

export const AppBadge = ({icon, children, ...props}) =>
  <Badge {...props} isIcon={!!icon}>
    {icon ? <Icon name={icon} /> : children}
  </Badge>

export default ({color = 'black', colorWeight = 200, title, icon, to, notifications, children, ...props}) => {
  const [isMouseDown, setIsMouseDown] = useState(false)

  return (
    <AppIcon
      to={to}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseOut={() => setIsMouseDown(false)}
      onBlur={() => setIsMouseDown(false)}
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
