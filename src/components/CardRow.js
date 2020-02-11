import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export const Container = styled.div`
  padding: ${props => props.theme.size[900]};
`

const CardRow = styled.div`
  display: grid;
  margin-bottom: ${props => props.theme.size[500]};
  margin-left: ${props => props.theme.size[900]};
  margin-right: ${props => props.theme.size[900]};
  padding: ${props => props.theme.size[500]};
  background-color: ${props => props.theme.grayscale[100]};
  border-radius: ${props => props.theme.size[500]};
  grid-template-areas: 
    "badge title detail"
    "badge connections detail";
  grid-template-columns: ${props => props.theme.size[900]} auto auto;
  grid-template-rows: ${props => props.theme.size[700]} ${props => props.theme.size[700]};
  grid-column-gap: ${props => props.theme.size[500]};
  color: inherit;

  &:hover {
    color: inherit;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Badge = styled(Img)`
  width: ${props => props.theme.size[900]};
  height: ${props => props.theme.size[900]};
  border-radius: ${props => props.theme.size[400]};
  grid-area: badge;
`

const Title = styled.span`
  grid-area: title;
  font-weight: 700;
`

const Connections = styled.span`
  grid-area: connections;
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[500]};
`

const Detail = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: detail;
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[500]};
`

export default props => (
  <CardRow>
    <Badge fluid={props.badge} />
    <Title>{props.title}</Title>
    <Connections>{props.connections}</Connections>
    <Detail>{props.detail}</Detail>
  </CardRow>
)
