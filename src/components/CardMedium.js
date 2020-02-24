import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from './Link'
import Icon from './Icon'

const LinkRow = styled(Link)`
  display: grid;
  margin-bottom: ${props => props.theme.size[500]};
  width: 100%;
  background-color: ${props => props.theme.grayscale[200]};
  border-radius: ${props => props.theme.size[500]};
  overflow: hidden;
  grid-template-areas: 
    "card"
    "row";
  grid-template-rows: auto auto;
  color: inherit;

  &:hover {
    color: inherit;
  }

  .dark-mode & {
    background-color: ${props => props.theme.grayscale[800]};
  }
`

const Row = styled.div`
  display: grid;
  padding: ${props => props.theme.size[500]};
  background-color: ${props => props.theme.grayscale[100]};
  grid-area: row;
  grid-template-areas: 
      "badge title detail arrow"
      "badge description detail arrow";
  grid-template-columns: auto 1fr auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: ${props => props.theme.size[200]};

  ${props => props.theme.media.phone`
    padding: ${props.theme.size[400]};
  `}

  .dark-mode & {
    background-color: ${props => props.theme.grayscale[800]};
  }
`

const Card = styled(Img)`
  grid-area: card;
`

const Badge = styled(Img)`
  margin-right: ${props => props.theme.size[500]};
  width: ${props => props.theme.size[800]};
  height: ${props => props.theme.size[800]};
  grid-area: badge;

  ${props => props.theme.media.phone`
    margin-right: ${props => props.theme.size[400]};
    width: ${props => props.theme.size[700]};
    height: ${props => props.theme.size[700]};
  `}
`

const Title = styled.span`
  grid-area: title;
  font-weight: 700;
  line-height: 1;
  font-size: ${props => props.theme.size[500]};
`

const Description = styled.span`
  grid-area: description;
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[500]};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1;

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size[400]};
  `}
`

const Detail = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: detail;
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[500]};

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size[400]};
  `}
`

const Arrow = styled(Icon).attrs({
  name: 'chevron-right',
  size: 600
})`
  margin: auto 0;
  margin-left: ${props => props.theme.size[500]};
  grid-area: arrow;
  color: ${props => props.theme.grayscale[400]};

  ${props => props.theme.media.phone`
    margin-left: ${props => props.theme.size[400]};
  `}
`

export default props => (
  <LinkRow to={props.to} className={props.className}>
    {props.card && <Card fluid={props.card} />}
    <Row>
      {props.badge && <Badge fluid={props.badge} />}
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Detail>{props.detail}</Detail>
      <Arrow />
    </Row>
  </LinkRow>
)
