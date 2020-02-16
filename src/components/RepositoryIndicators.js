import React from 'react'
import styled from 'styled-components'
import { formatNumber, formatDate, statusIcon, statusBadge} from './Repository'
import Indicator from './Indicator'

const Indicators = styled.div`
  display: flex;
`

export default props => {
  const { stargazers, commits, downloads, version, updatedAt, createdAt, status } = props
  const date = updatedAt || createdAt

  return (
    <Indicators>
      <Indicator 
        icon="fire"
        color="default"
        title="Weekly Downloads"
        badge={downloads && formatNumber(downloads)}
      />

      <Indicator 
        icon="star"
        color="default"
        title="Stargazers"
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
        icon={statusIcon(status)}
        color="default"
        title="Status"
        badge={statusBadge(status)}
      />
    </Indicators>
  )
}
