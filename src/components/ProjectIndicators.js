import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Indicator from './Indicator'

const ProjectIndicators = styled.div`
  display: flex;
`

const getDate = (created, updated) => {
  const createdFormatted = moment(created).format("MMM YYYY")
  const updatedFormatted = moment(updated).format("MMM YYYY")
  const isRange = createdFormatted !== updatedFormatted

  if (isRange) return `${createdFormatted} - ${updatedFormatted}`
  return createdFormatted
}

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

export default props => {
  const { commits, createdAt, updatedAt, version, status } = props.project

  return (
    <ProjectIndicators>
      <Indicator 
        icon="calendar"
        color="default"
        title="Timeline"
        badge={getDate(createdAt, updatedAt)}
      />

      <Indicator 
        icon="history"
        color="default"
        title="Commits"
        badge={commits}
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
    </ProjectIndicators>
  )
}
