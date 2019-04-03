import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import Link from './Link'

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.size[250]};
  background-color: ${props => props.theme.colors.black[200]};
  border-radius: ${props => props.theme.size[900]};
  overflow: hidden;
  color: inherit;

  &:hover {
    color: inherit;
  }
`

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.size[500]} auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: ${props => props.theme.size[300]};
  grid-row-gap: ${props => props.theme.size[200]};
  grid-template-areas: 
    "badge title title"
    "badge detail timestamp";
  padding: ${props => props.theme.size[250]};
  padding-right: ${props => props.theme.size[400]};
  align-items: center;
  color: ${props => props.theme.colors.black[600]};
  font-size: ${props => props.theme.size[250]};
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;

  ${props => props.theme.media.tabletHorizontal`
    padding: ${props => props.theme.size[300]};
    padding-right: ${props => props.theme.size[400]};
    font-size: ${props => props.theme.size[300]};
  `}

  ${props => props.theme.media.tabletVertical`
    grid-template-columns: ${props => props.theme.size[600]} auto auto;
    grid-column-gap: ${props => props.theme.size[400]};
    grid-row-gap: ${props => props.theme.size[300]};
    padding: ${props => props.theme.size[350]};
    padding-right: ${props => props.theme.size[450]};
    font-size: ${props => props.theme.size[350]};
  `}

  ${props => props.theme.media.phone`
    grid-template-columns: ${props => props.theme.size[650]} auto auto;
    grid-column-gap: ${props => props.theme.size[450]};
    grid-row-gap: ${props => props.theme.size[350]};
    padding: ${props => props.theme.size[450]};
    padding-right: ${props => props.theme.size[500]};
    font-size: ${props => props.theme.size[450]};
  `}
`

const CardHero = styled.div`
  display: flex;
  grid-area: hero;
  overflow: hidden;
`

const CardBadge = styled.div`
  display: flex;
  grid-area: badge;
  height: ${props => props.theme.size[500]};
  border-radius: ${props => props.theme.size[500]};
  overflow: hidden;

  ${props => props.theme.media.tabletVertical`
    height: ${props => props.theme.size[600]};
    border-radius: ${props => props.theme.size[600]};
  `}

  ${props => props.theme.media.phone`
    height: ${props => props.theme.size[650]};
    border-radius: ${props => props.theme.size[650]};
  `}
`

const CardTitle = styled.h2`
  margin: 0;
  grid-area: title;
  align-self: end;
  line-height: 1;
  color: ${props => props.theme.colors.black[800]};
  font-size: ${props => props.theme.size[350]};
  font-weight: 600;
  text-transform: initial;

  ${props => props.theme.media.tabletVertical`
    font-size: ${props => props.theme.size[400]};
  `}

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size[500]};
  `}
`

const CardDetail = styled.span`
  grid-area: detail;
  align-self: baseline;
`

const CardTimestamp = styled.span`
  grid-area: timestamp;
  justify-self: flex-end;
  align-self: baseline;
`

const getTimestamp = date => {
  const now = moment()
  const then = moment(date)
  const isThisWeek = now.diff(then, 'weeks') === 0
  const isThisYear = now.diff(then, 'years') === 0
  return isThisWeek
    ? then.fromNow()
    : isThisYear
      ? then.format('MMMM D')
      : then.format('MMM YYYY')
}

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: center;
`

export default ({to, hero, badge, title, detail, date, ...props}) => (
  <Card {...props} to={to}>
    <CardHero>{hero}</CardHero>
    <CardDetails>
      <CardBadge>{badge}</CardBadge>
      <CardTitle>{title}</CardTitle>
      <CardDetail>{detail}</CardDetail>
      <CardTimestamp>{moment(date).format('MMMM D')}</CardTimestamp>
    </CardDetails>
  </Card>
)
