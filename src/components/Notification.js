import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import moment from 'moment'


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

const Notification = styled(Link)`
  display: grid;
  grid-template-columns: ${props => props.theme.size[500]} auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: ${props => props.theme.size[300]};
  grid-row-gap: ${props => props.theme.size[150]};
  grid-template-areas: 
    "badge title title"
    "badge detail timestamp";
  padding: ${props => props.theme.size[300]};
  padding-right: ${props => props.theme.size[350]};
  margin: ${props => props.theme.size[200]};
  align-items: center;
  width: ${props => props.theme.size[800]};
  background-color: ${props => props.theme.colors.black[200]};
  border-radius: ${props => props.theme.size[400]};
  border-bottom: ${props => props.theme.size[100]} solid ${props => props.theme.colors.black[300]};
  color: inherit;

  &:hover {
    color: inherit;
  }
`

const NotificationBadge = styled.div`
  display: flex;
  grid-area: badge;
  min-height: ${props => props.theme.size[500]};
  border-radius: ${props => props.theme.size[300]};
  /* justify-content: stretch;
  align-items: stretch; */
  overflow: hidden;
`

const NotificationTitle = styled.h2`
  margin: 0;
  grid-area: title;
  align-self: end;
  font-size: inherit;
  font-weight: 600;
  line-height: 1;
`

const NotificationDetail = styled.span`
  grid-area: detail;
  align-self: baseline;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black[500]};
  font-size: ${props => props.theme.size[200]};
  line-height: 1;
`

const NotificationTimestamp = styled.span`
  grid-area: timestamp;
  justify-self: flex-end;
  align-self: baseline;
  color: ${props => props.theme.colors.black[500]};
  font-size: ${props => props.theme.size[200]};
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
  <Notification to={props.to}>
    <NotificationBadge>{props.badge}</NotificationBadge>
    <NotificationTitle>{props.title}</NotificationTitle>
    <NotificationDetail>{props.detail}</NotificationDetail>
    <NotificationTimestamp>{getTimestamp(props.date)}</NotificationTimestamp>
  </Notification>
)
