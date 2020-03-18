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
  color: ${props => props.theme.grayscale[500]};
  background-color: ${props => props.theme.grayscale[200]};
  border-radius: ${props => props.theme.size[500]};
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;

  .dark-mode & {
    color: ${props => props.theme.grayscale[400]};
    background-color: ${props => props.theme.grayscale[800]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${props => props.theme.size[100]} ${props => props.theme.color.primary};
  }

  &:hover {
    color: ${props => props.theme.grayscale[600]};
  
    .dark-mode & {
      color: ${props => props.theme.grayscale[400]};
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &[aria-current] {
    cursor: default;
  }

  &[aria-current],
  &[data-active]  {
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
  font-size: ${props => props.theme.size[500]};
  font-weight: 700;
  background-color: ${props => props.theme.grayscale[300]};
  border-radius: ${props => props.theme.size[600]};
  align-self: stretch;
  place-items: center;

  .dark-mode & {
    color: ${props => props.theme.grayscale[800]};
    background-color: ${props => props.theme.grayscale[700]};
  }
`

const BadgeOptional = props => props.children ? <Badge {...props} /> : null

const NavigationIcon = styled(Icon)`
  grid-area: icon;
  justify-self: center;
  color: ${props => props.theme.color[props.color]};
  transform: scale(1.25);
`

export default props => (
  <NavigationRow to={props.to} color={props.color} onClick={props.onClick}>
    <NavigationIcon name={props.icon} size={600} color={props.color} />
    <Title>{props.title}</Title>
    <BadgeOptional>{props.badge}</BadgeOptional>
  </NavigationRow>
)
