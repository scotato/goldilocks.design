import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import Icon from "./Icon"

const NavigationRow = styled(Link)`
  display: grid;
  padding: ${props => props.theme.size[500]};
  align-items: center;
  grid-column-gap: ${props => props.theme.size[400]};
  grid-row-gap: ${props => props.theme.size[200]};
  grid-template-columns: ${props => props.theme.size[700]} auto auto ${props => props.theme.size[600]};
  grid-template-rows: ${props => props.theme.size[500]} ${props => props.theme.size[400]};
  grid-template-areas: 
    "icon title detail chevron"
    "icon subtitle detail chevron";
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border-top: ${props => props.theme.size[100]} solid transparent;
  border-bottom: ${props => props.theme.size[100]} solid ${props => props.theme.grayscale[300]};

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    color: inherit;
  }
`

const Title = styled.div`
  grid-area: title;
  font-size: ${props => props.theme.size[500]};
`

const Subtitle = styled.div`
  grid-area: subtitle;
  font-size: ${props => props.theme.size[400]};
  color: ${props => props.theme.grayscale[500]};
`

const Detail = styled.strong`
  grid-area: detail;
  justify-self: end;
  font-size: ${props => props.theme.size[400]};
  color: ${props => props.theme.color.success};
`

const IconRight = styled.div`
  display: grid;
  grid-area: chevron;
  color: ${props => props.theme.grayscale[400]};
  place-items: center;
`

const NavigationIcon = styled(Icon)`
  grid-area: icon;
`

export default props => (
  <NavigationRow to={props.to} onClick={props.onClick}>
    <NavigationIcon name={props.icon} size={700} />
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Detail>{props.detail}</Detail>
    <IconRight>
      <Icon name="chevron-right" size={600} />
    </IconRight>
  </NavigationRow>
)