import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import Link from './Link'
import Icon from './Icon'

const rowStyle = css`
  display: grid;
  margin: 0;
  margin-bottom: ${props => props.theme.size[500]};
  padding: ${props => props.theme.size[500]};
  background-color: ${props => props.theme.grayscale[100]};
  border-radius: ${props => props.theme.size[500]};
  grid-column-gap: ${props => props.theme.size[400]};

  .dark-mode & {
    background-color: ${props => props.theme.grayscale[800]};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`

const LinkRow = styled(Link)`
  ${rowStyle}
  grid-template-areas: "badge title detail arrow";
  grid-template-columns: ${props => props.theme.size[700]} auto auto ${props => props.theme.size[600]};
  color: inherit;

  &:hover {
    color: inherit;
  }

  &:focus svg {
    color: ${props => props.theme.color.info};
  }
`

const Row = styled.div`
  ${rowStyle}
  grid-template-areas: "badge title detail";
  grid-template-columns: ${props => props.theme.size[700]} 1fr auto;
`

const Badge = styled(Img)`
  width: ${props => props.theme.size[700]};
  height: ${props => props.theme.size[700]};
  border-radius: ${props => props.theme.size[300]};
  grid-area: badge;
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

  ${props => props.theme.media.phone`
    display: none;
  `}
`

const Arrow = styled(Icon).attrs({
  name: 'chevron-right',
  size: 600
})`
  margin: auto 0;
  grid-area: arrow;
  color: ${props => props.theme.grayscale[400]};
`

export const RowSmall = props => (
  <Row>
    <Badge fluid={props.badge} />
    <Title>{props.title}</Title>
    <Detail>{props.detail}</Detail>
  </Row>
)

export default props => (
  <LinkRow to={props.to}>
    <Badge fluid={props.badge} />
    <Title>{props.title}</Title>
    <Detail>{props.detail}</Detail>
    <Arrow />
  </LinkRow>
)
