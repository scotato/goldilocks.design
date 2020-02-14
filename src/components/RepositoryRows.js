import React from 'react'

import Group from './Group'
import Row from './Row'
import { formatNumber, formatDate, statusIcon, statusBadge} from './Repository'

const SourceRow = props => props.detail ? (
  <Row {...props} />
) : null

export default props => {
  const { stargazers, commits, version, updatedAt, createdAt, status } = props
  const visible = stargazers || commits || version || updatedAt || createdAt || status
  
  return visible ? (
    <Group title="Source">
      <SourceRow
        icon="star"
        title="GitHub Stargazers"
        detail={stargazers && formatNumber(stargazers)}
      />

      <SourceRow
        icon="calendar-edit"
        title="Updated"
        detail={updatedAt && formatDate(updatedAt)}
      />

      <SourceRow
        icon="calendar-plus"
        title="Created"
        detail={createdAt && formatDate(createdAt)}
      />

      <SourceRow
        icon="tag"
        title="Version"
        detail={version}
      />

      <SourceRow
        icon='history'
        title="Commits"
        detail={commits && formatNumber(commits)}
      />

      <SourceRow 
        icon={statusIcon(status)}
        title="Status"
        detail={statusBadge(status)}
      />
    </Group>
  ) : null
}