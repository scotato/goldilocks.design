import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import numeral from 'numeral'
import Indicator from './Indicator'

const Indicators = styled.div`
  display: flex;
`

const getStatusIcon = status => {
  switch (status) {
    case 'prototype':
      return 'pencil-ruler'
    case 'development':
      return 'tools'
    case 'production':
      return 'drafting-compass'
    case 'archived':
      return 'archive'
    default:
      return null
  }
}

const getStatusBadge = status => {
  switch (status) {
    case 'prototype':
      return 'Prototype'
    case 'development':
      return 'Development'
    case 'production':
      return 'Production'
    case 'archived':
      return 'Archived'
    default:
      return null
  }
}

export const formatNumber = number => number > 999 ? numeral(number).format('0.0a') : number
export const formatDate = date => moment(date).format("MMM YYYY")

export default props => {
  const { stargazers, commits, version, updatedAt, createdAt, status } = props
  const date = updatedAt || createdAt

  return (
    <Indicators>
      <Indicator 
        icon="star"
        color="default"
        title={'Github Stargazers'}
        badge={stargazers && formatNumber(stargazers)}
      />

      <Indicator 
        icon="calendar"
        color="default"
        title={updatedAt ? 'Updated' : 'Created'}
        badge={date && formatDate(date)}
      />

      <Indicator 
        icon="history"
        color="default"
        title="Commits"
        badge={commits && formatNumber(commits)}
      />

      <Indicator 
        icon="tag"
        color="default"
        title="Version"
        badge={version}
      />

      <Indicator 
        icon={getStatusIcon(status)}
        color="default"
        title="Status"
        badge={getStatusBadge(status)}
      />
    </Indicators>
  )
}
