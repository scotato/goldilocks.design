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
  margin: ${props => props.theme.size.layout[250]};
  background-color: ${props => props.theme.colors.black[200]};
  border-radius: ${props => props.theme.size.layout[900]};
  /* border-radius: ${props => props.theme.size.layout[400]}; */
  /* border-bottom: ${props => props.theme.size.layout[100]} solid ${props => props.theme.colors.black[300]}; */
  /* box-shadow: 0 ${props => props.theme.size.layout[100]} ${props => props.theme.size.layout[300]} rgba(0, 0, 0, ${props => props.isOff || props.isDarkMode ? 0.15 : 0.05}); */
  overflow: hidden;
  color: inherit;

  ${props => props.theme.media.tabletHorizontal`
    border-radius: ${props => props.theme.size.layout[500]};
    border-width: ${props => props.theme.size.layout[150]};
  `}

  ${props => props.theme.media.phone`
    border-radius: ${props => props.theme.size.layout[550]};
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
  grid-row-gap: ${props => props.theme.size.layout[200]};
  grid-template-areas: 
    "badge title title"
    "badge detail timestamp";
  padding: ${props => props.theme.size.layout[250]};
  padding-right: ${props => props.theme.size.layout[400]};
  align-items: center;

  ${props => props.theme.media.tabletHorizontal`
    grid-template-columns: ${props => props.theme.size.layout[600]} auto auto;
    grid-column-gap: ${props => props.theme.size.layout[400]};
    grid-row-gap: ${props => props.theme.size.layout[300]};
    padding: ${props => props.theme.size.layout[350]};
    padding-right: ${props => props.theme.size.layout[450]};
  `}

  ${props => props.theme.media.phone`
    grid-template-columns: ${props => props.theme.size.layout[650]} auto auto;
    grid-column-gap: ${props => props.theme.size.layout[450]};
    grid-row-gap: ${props => props.theme.size.layout[350]};
    padding: ${props => props.theme.size.layout[450]};
    padding-right: ${props => props.theme.size.layout[500]};
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
  height: ${props => props.theme.size.layout[500]};
  border-radius: ${props => props.theme.size.layout[900]};
  overflow: hidden;

  ${props => props.theme.media.tabletHorizontal`
    height: ${props => props.theme.size.layout[600]};
  `}

  ${props => props.theme.media.phone`
    height: ${props => props.theme.size.layout[650]};
  `}
`

const CardTitle = styled.h2`
  margin: 0;
  grid-area: title;
  align-self: end;
  line-height: 1;
  color: ${props => props.theme.colors.black[800]};
  font-size: ${props => props.theme.size.layout[350]};
  font-weight: 600;

  ${props => props.theme.media.tabletHorizontal`
    font-size: ${props => props.theme.size.layout[400]};
    font-weight: 500;
  `}

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size.layout[500]};
  `}
`

const CardDetail = styled.span`
  grid-area: detail;
  align-self: baseline;
  color: ${props => props.theme.colors.black[600]};
  font-size: ${props => props.theme.size.layout[250]};
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;

  ${props => props.theme.media.tabletHorizontal`
    font-size: ${props => props.theme.size.layout[350]};
  `}

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size.layout[450]};
  `}
`

const CardTimestamp = styled.span`
  grid-area: timestamp;
  justify-self: flex-end;
  align-self: baseline;
  color: ${props => props.theme.colors.black[600]};
  font-size: ${props => props.theme.size.layout[250]};
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;

  ${props => props.theme.media.tabletHorizontal`
    font-size: ${props => props.theme.size.layout[350]};
  `}

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.size.layout[450]};
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
      <CardTimestamp>{getTimestamp(date)}</CardTimestamp>
    </CardDetails>
  </Card>
)
