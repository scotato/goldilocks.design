import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Indicator from './Indicator'

const ProjectIndicators = styled.div`
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

export default props => {
  const { project, showStatus } = props
  const { commits, createdAt, updatedAt, version, status } = project

  return (
    <ProjectIndicators>
      <Indicator 
        icon="calendar"
        color="default"
        title={updatedAt ? 'Updated' : 'Created'}
        badge={moment(updatedAt || createdAt).format("MMM YYYY")}
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
        badge={showStatus && getStatusBadge(status)}
      />
    </ProjectIndicators>
  )
}
