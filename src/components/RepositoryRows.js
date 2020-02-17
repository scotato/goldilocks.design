import React from 'react'

import Group from './Group'
import Row from './Row'
import { formatNumber, formatDate, statusIcon, statusBadge} from './Repository'

const SourceRow = props => props.detail ? (
  <Row {...props} />
) : null

export default props => {
  const { stargazers, commits, downloads, version, updatedAt, createdAt, status } = props
  const visible = stargazers || downloads || commits || version || updatedAt || createdAt || status
  
  return visible ? (
    <Group title="Source">
      <SourceRow 
        icon="fire"
        title="Weekly Downloads"
        detail={downloads && formatNumber(downloads)}
      />

      <SourceRow
        icon="star"
        title="Stargazers"
        detail={stargazers && formatNumber(stargazers)}
      />

      <SourceRow
        icon='history'
        title="Commits"
        detail={commits && formatNumber(commits)}
      />

      <SourceRow
        icon="tag"
        title="Version"
        detail={version}
      />

      <SourceRow 
        icon={statusIcon(status)}
        title="Status"
        detail={statusBadge(status)}
      />

      <SourceRow
        icon="calendar-plus"
        title="Created"
        detail={createdAt && formatDate(createdAt)}
      />

      <SourceRow
        icon="calendar"
        title="Updated"
        detail={updatedAt && formatDate(updatedAt)}
      />
    </Group>
  ) : null
}
