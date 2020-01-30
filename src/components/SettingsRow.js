import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 ${props => props.theme.size[900]};
`

const SettingsRow = styled.div`
  display: grid;
  margin: ${props => props.theme.size[500]} 0;
  padding: ${props => props.theme.size[500]};
  background-color: ${props => props.theme.isDarkMode ? props.theme.grayscale[800] : props.theme.grayscale[200]};
  border-radius: ${props => props.theme.size[500]};
  grid-template-areas: "badge title action";
  grid-template-columns: ${props => props.theme.size[700]} 1fr auto;
  grid-template-rows: ${props => props.theme.size[700]};
  grid-column-gap: ${props => props.theme.size[500]};
  color: inherit;
  align-items: center;

  &:hover {
    color: inherit;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Badge = styled.div`
  grid-area: badge;
  color: ${props => props.theme.isDarkMode ? props.theme.grayscale[400] : props.theme.grayscale[400]};
`

const Title = styled.span`
  grid-area: title;
  font-weight: 500;
  line-height: 1;
  font-size: ${props => props.theme.size[600]};
`

const Action = styled.div`
  grid-area: action;
  line-height: 1;
`

export default props => (
  <SettingsRow>
    <Badge>{props.badge}</Badge>
    <Title>{props.title}</Title>
    <Action>{props.action}</Action>
  </SettingsRow>
)
