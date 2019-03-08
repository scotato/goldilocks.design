import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import Link from './Link'

moment.locale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    // s:  'seconds',
    s: '%ds',
    ss: '%ds',
    // m:  'a minute',
    m: '%dm',
    mm: '%dm',
    // h:  'an hour',
    h: '%dh',
    hh: '%dh',
    // d:  'a day',
    d: '%dd',
    dd: '%dd',
    // M:  'a month',
    M: '%dM',
    MM: '%dM',
    // y:  'a year',
    y: '%dY',
    yy: '%dY'
  }
})

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.size.layout[200]};
  background-color: ${props => props.theme.colors.black[200]};
  border-radius: ${props => props.theme.size.layout[400]};
  border-bottom: ${props => props.theme.size.layout[100]} solid ${props => props.theme.colors.black[300]};
  overflow: hidden;
  color: inherit;

  ${props => props.theme.media.tabletHorizontal`
    border-radius: ${props => props.theme.size.layout[450]};
    border-width: ${props => props.theme.size.layout[150]};
  `}

  ${props => props.theme.media.phone`
    border-radius: ${props => props.theme.size.layout[500]};
    border-width: ${props => props.theme.size.layout[200]};
  `}

  &:hover {
    color: inherit;
  }
`

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.size.layout[500]} auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: ${props => props.theme.size.layout[300]};
  grid-row-gap: ${props => props.theme.size.layout[150]};
  grid-template-areas: 
    "badge title title"
    "badge detail timestamp";
  padding: ${props => props.theme.size.layout[300]};
  padding-right: ${props => props.theme.size.layout[350]};
  align-items: center;

  ${props => props.theme.media.tabletHorizontal`
    grid-template-columns: ${props => props.theme.size.layout[550]} auto auto;
    grid-column-gap: ${props => props.theme.size.layout[350]};
    grid-row-gap: ${props => props.theme.size.layout[200]};
    padding: ${props => props.theme.size.layout[350]};
  `}

  ${props => props.theme.media.phone`
    grid-template-columns: ${props => props.theme.size.layout[600]} auto auto;
    grid-column-gap: ${props => props.theme.size.layout[400]};
    grid-row-gap: ${props => props.theme.size.layout[250]};
    padding: ${props => props.theme.size.layout[400]};
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
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.size.layout[300]};
  overflow: hidden;
`

const CardTitle = styled.h2`
  margin: 0;
  grid-area: title;
  align-self: end;
  font-weight: 600;
  line-height: 1;
  font-size: ${props => props.theme.size.typography[300]};

  ${props => props.theme.media.tabletHorizontal`
    font-size: ${props => props.theme.size.typography[400]};
  `}

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size.typography[500]};
  `}
`

const CardDetail = styled.span`
  grid-area: detail;
  align-self: baseline;
  color: ${props => props.theme.colors.black[500]};
  font-size: ${props => props.theme.size.typography[200]};
  line-height: 1;

  ${props => props.theme.media.tabletHorizontal`
    font-size: ${props => props.theme.size.typography[300]};
  `}

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size.typography[400]};
  `}
`

const CardTimestamp = styled.span`
  grid-area: timestamp;
  justify-self: flex-end;
  align-self: baseline;
  color: ${props => props.theme.colors.black[500]};
  font-size: ${props => props.theme.size.typography[200]};
  line-height: 1;

  ${props => props.theme.media.tabletHorizontal`
    font-size: ${props => props.theme.size.typography[300]};
  `}

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size.typography[400]};
  `}
`

const getTimestamp = date => {
  const now = moment()
  const then = moment(date)
  const isThisWeek = now.diff(then, 'weeks') === 0
  const isThisYear = now.diff(then, 'years') === 0
  return isThisWeek
    ? then.fromNow()
    : isThisYear
      ? then.format('MMMM d')
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
      <CardTimestamp>{getTimestamp(date)}</CardTimestamp>
    </CardDetails>
  </Card>
)
