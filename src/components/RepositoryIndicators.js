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
        title="Weekly Downloads"
        badge={downloads && formatNumber(downloads)}
      />

      <Indicator 
        icon="star"
        title="Stargazers"
        badge={stargazers && formatNumber(stargazers)}
      />

      <Indicator 
        icon="calendar"
        title={updatedAt ? 'Updated' : 'Created'}
        badge={date && formatDate(date)}
      />

      <Indicator 
        icon="history"
        title="Commits"
        badge={commits && formatNumber(commits)}
      />

      <Indicator 
        icon="tag"
        title="Version"
        badge={version}
      />

      <Indicator 
        icon={statusIcon(status)}
        title="Status"
        badge={statusBadge(status)}
      />
    </Indicators>
  )
}
