import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from './Link'
import Icon from './Icon'

const LinkRow = styled(Link)`
  display: grid;
  margin: ${props => props.theme.size[500]} 0;
  padding: ${props => props.theme.size[400]};
  background-color: ${props => props.theme.isDarkMode ? props.theme.grayscale[800] : props.theme.grayscale[200]};
  border-radius: ${props => props.theme.size[400]};
  grid-template-areas: "badge title detail arrow";
  grid-template-columns: ${props => props.theme.size[700]} auto auto ${props => props.theme.size[600]};
  grid-column-gap: ${props => props.theme.size[400]};
  color: inherit;

  &:hover {
    color: inherit;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Badge = styled(Img)`
  width: ${props => props.theme.size[700]};
  height: ${props => props.theme.size[700]};
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
  font-size: ${props => props.theme.size[500]};
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

export default props => (
  <LinkRow to={props.to}>
    <Badge fluid={props.badge} />
    <Title>{props.title}</Title>
    <Detail>{props.detail}</Detail>
    <Arrow />
  </LinkRow>
)
