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
`

const CardHero = styled.div`
  display: flex;
  grid-area: hero;
  overflow: hidden;
`

const CardBadge = styled.div`
  display: flex;
  grid-area: badge;
  min-height: ${props => props.theme.size.layout[500]};
  border-radius: ${props => props.theme.size.layout[300]};
  overflow: hidden;
`

const CardTitle = styled.h2`
  margin: 0;
  grid-area: title;
  align-self: end;
  font-size: inherit;
  font-weight: 600;
  line-height: 1;
`

const CardDetail = styled.span`
  grid-area: detail;
  align-self: baseline;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black[500]};
  font-size: ${props => props.theme.size.typography[200]};
  line-height: 1;
`

const CardTimestamp = styled.span`
  grid-area: timestamp;
  justify-self: flex-end;
  align-self: baseline;
  color: ${props => props.theme.colors.black[500]};
  font-size: ${props => props.theme.size.typography[200]};
  line-height: 1;
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

export default props => (
  <Card to={props.to}>
    <CardHero>{props.hero}</CardHero>
    <CardDetails>
      <CardBadge>{props.badge}</CardBadge>
      <CardTitle>{props.title}</CardTitle>
      <CardDetail>{props.detail}</CardDetail>
      <CardTimestamp>{getTimestamp(props.date)}</CardTimestamp>
    </CardDetails>
  </Card>
)
