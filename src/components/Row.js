import React from 'react'
import styled, { css } from 'styled-components'
import Icon from './Icon'

export const rowStyle = css`
  display: grid;
  position: relative;
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

const Row = styled.div`
  ${rowStyle}
`

export const Badge = styled(Icon)`
  grid-area: badge;
  justify-self: center;
  color: ${props => props.theme.grayscale[400]};
  transform: scale(1.25);
  z-index: 1;
  
  .dark-mode & {
    color: ${props => props.theme.grayscale[500]};
  }
`

export const Title = styled.span`
  grid-area: title;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 1;
`

export const Detail = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: detail;
  color: ${props => props.theme.grayscale[500]};
  z-index: 1;
`

export default props => !props.hidden ? (
  <Row>
    <Badge name={props.icon} size={600} />
    <Title>{props.title}</Title>
    <Detail>{props.detail}</Detail>
  </Row>
) : null
