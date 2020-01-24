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
  grid-template-columns: ${props => props.theme.size[700]} auto  ${props => props.theme.size[600]};
  grid-template-areas: 
    "icon title chevron";
  background-color: ${props => props.theme.grayscale[200]};
  border-radius: ${props => props.theme.size[500]};
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: inherit;
  }
`

const Title = styled.div`
  grid-area: title;
  font-size: ${props => props.theme.size[600]};
`

const IconRight = styled.div`
  display: grid;
  grid-area: chevron;
  color: ${props => props.theme.grayscale[400]};
  place-items: center;
`

const NavigationIcon = styled(Icon)`
  grid-area: icon;
  color: ${props => props.theme.color[props.color]};
`

export default props => (
  <NavigationRow to={props.to} onClick={props.onClick}>
    <NavigationIcon name={props.icon} size={700} color={props.color} />
    <Title>{props.title}</Title>
    <IconRight>
      <Icon name="chevron-right" size={600} />
    </IconRight>
  </NavigationRow>
)