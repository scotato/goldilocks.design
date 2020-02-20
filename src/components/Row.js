import React from 'react'
import styled, { css } from 'styled-components'
import Link from './Link'
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

const LinkRow = styled(Link)`
  ${rowStyle}
  grid-template-areas: "badge title detail arrow";
  grid-template-columns: ${props => props.theme.size[700]} auto auto ${props => props.theme.size[600]};
  color: inherit;

  &:hover {
    color: inherit;
  }
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
  grid-area: detail;
  text-align: right;
  color: ${props => props.theme.grayscale[500]};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1;
  max-height: ${props => props.theme.size[700]};
  z-index: 1;
`

const Arrow = styled(Icon).attrs({
  name: props => props.external ? 'external-link-alt' : 'chevron-right',
  size: 600
})`
  margin: auto 0;
  grid-area: arrow;
  color: ${props => props.theme.grayscale[400]};
`

export default props => {
  if (props.hidden) return null

  return props.to ? (
    <LinkRow to={props.to}>
      <Badge name={props.icon} size={600} />
      <Title>{props.title}</Title>
      <Detail>{props.detail}</Detail>
      <Arrow external={props.to.includes('http')} />
    </LinkRow>
  ) : (
    <Row>
      <Badge name={props.icon} size={600} />
      <Title>{props.title}</Title>
      <Detail>{props.detail}</Detail>
    </Row>
  )
}
