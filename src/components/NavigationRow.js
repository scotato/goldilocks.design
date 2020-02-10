import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import Icon from "./Icon"

const NavigationRow = styled(Link)`
  display: grid;
  margin-bottom: ${props => props.theme.size[500]};
  padding: ${props => props.theme.size[500]};
  align-items: center;
  grid-column-gap: ${props => props.theme.size[400]};
  grid-row-gap: ${props => props.theme.size[200]};
  grid-template-columns: ${props => props.theme.size[700]} auto  ${props => props.theme.size[700]};
  grid-template-areas: 
    "icon title badge";
  color: ${props => props.theme.grayscale[600]};
  background-color: ${props => props.theme.grayscale[200]};
  border-radius: ${props => props.theme.size[500]};
  text-decoration: none;
  cursor: pointer;
  will-change: color, background-color;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;
  font-weight: 600;

  .dark-mode & {
    color: ${props => props.theme.grayscale[400]};
    background-color: ${props => props.theme.grayscale[800]};
  }

  &:hover {
    color: ${props => props.theme.grayscale[600]};
  
    .dark-mode & {
      color: ${props => props.theme.grayscale[400]};
    }
  }

  &.active {
    color: white;
    background-color: ${props => props.theme.color[props.color]};

    &:hover {
      color: white;
    }

    svg {
      color: white;
    }

    .badge {
      color: ${props => props.theme.color[`${props.color}Light`]};
      background-color: ${props => props.theme.color[`${props.color}Dark`]};
    }
  }
`

const Title = styled.div`
  grid-area: title;
  font-size: ${props => props.theme.size[600]};
`

const Badge = styled.div.attrs({
  className: 'badge'
})`
  display: grid;
  grid-area: badge;
  color: ${props => props.theme.grayscale[500]};
  background-color: ${props => props.theme.grayscale[300]};
  border-radius: ${props => props.theme.size[600]};
  align-self: stretch;
  place-items: center;
  will-change: color, background-color;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;

  .dark-mode & {
    color: ${props => props.theme.grayscale[800]};
    background-color: ${props => props.theme.grayscale[700]};
  }
`

const BadgeOptional = props => props.children ? <Badge {...props} /> : null

const NavigationIcon = styled(Icon)`
  grid-area: icon;
  color: ${props => props.theme.color[props.color]};
  will-change: color;
  transition: color 0.2s ease-out;
`

export default props => (
  <NavigationRow to={props.to} color={props.color} onClick={props.onClick}>
    <NavigationIcon name={props.icon} size={700} color={props.color} />
    <Title>{props.title}</Title>
    <BadgeOptional>{props.badge}</BadgeOptional>
  </NavigationRow>
)
