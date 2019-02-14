import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
  border-radius: 25%;
  background-color: ${props => props.theme.colors[props.color][props.colorWeight]};
  transform: scale(${props => props.isMouseDown ? 0.975 : 1});
  transition: transform .1s ease-out;
  will-change: transform;
  line-height: 1;
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

export const AppBadge = ({icon, ...props}) => {
  const { apps: { edges } } = useStaticQuery(graphql`
    query AppsQuery {
      apps: allMarkdownRemark(filter: { frontmatter: { appId: { gt: 0 } } }, sort: { fields: [frontmatter___appId] }) {
        edges {
          node {
            frontmatter {
              icon
              title
              color
              colorWeight
              appId
            }
          }
        }
      }
    }
  `)

  const app = props.appId && edges.find(edge => props.appId === edge.node.frontmatter.appId).node.frontmatter

  return props.appId ? (
    <Badge {...app}>
      <Icon name={app.icon} />
    </Badge>
  ) : (
    <Badge {...props}>
      <Icon name={icon} />
    </Badge>
  )

}


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
        icon={icon}
        color={color}
        colorWeight={colorWeight}
        isMouseDown={isMouseDown}
      />
      <AppTitle children={title} />
      <AppNotification children={notifications} />
    </AppIcon>
  )
}
