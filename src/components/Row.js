import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Row = styled.div`
  display: grid;
  margin-bottom: ${props => props.theme.size[500]};
  padding: ${props => props.theme.size[500]};
  background-color: ${props => props.theme.grayscale[200]};
  border-radius: ${props => props.theme.size[600]};
  grid-template-areas: "badge title detail";
  grid-template-columns: ${props => props.theme.size[700]} 1fr auto;
  grid-column-gap: ${props => props.theme.size[400]};
  line-height: ${props => props.theme.size[700]};
  align-items: center;

  .dark-mode & {
    background-color: ${props => props.theme.grayscale[800]};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Badge = styled(Icon)`
  margin: 0 auto;
  grid-area: badge;
  color: ${props => props.theme.grayscale[400]};
  
  .dark-mode & {
    color: ${props => props.theme.grayscale[500]};
  }
`

const Title = styled.span`
  grid-area: title;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Detail = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: detail;
  color: ${props => props.theme.grayscale[500]};
`

export default props => (
  <Row>
    <Badge name={props.icon} size={700} />
    <Title>{props.title}</Title>
    <Detail>{props.detail}</Detail>
  </Row>
)
