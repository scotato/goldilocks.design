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
        color="orange"
        title="Weekly Downloads"
        badge={downloads && formatNumber(downloads)}
      />

      <Indicator 
        icon="star"
        color="yellow"
        title="Stargazers"
        badge={stargazers && formatNumber(stargazers)}
      />

      <Indicator 
        icon="calendar"
        color="orange"
        title={updatedAt ? 'Updated' : 'Created'}
        badge={date && formatDate(date)}
      />

      <Indicator 
        icon="history"
        title="Commits"
        color="yellow"
        badge={commits && formatNumber(commits)}
      />

      <Indicator 
        icon="tag"
        color="blue"
        title="Version"
        badge={version}
      />

      <Indicator 
        icon={statusIcon(status)}
        color="orange"
        title="Status"
        badge={statusBadge(status)}
      />
    </Indicators>
  )
}
