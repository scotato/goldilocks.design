import React from 'react'

import Group from './Group'
import Row from './Row'

const SourceRow = props => props.to ? (
  <Row {...props} />
) : null

const cleanUrl = url => {
  if (!url) return null
  
  let clean = url
    .replace('https://github.com/', '')
    .replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')

  if (url.slice(-1) === '/') clean = clean.slice(0, -1)
  return clean
}

export default ({ website, github, feedback, docs }) => {
  const visible = website || github || feedback || docs

  return visible ? (
    <Group title="Resources">
      <SourceRow 
        to={website}
        icon="link"
        title="Website"
        detail={cleanUrl(website)}
      />

      <SourceRow 
        to={github}
        icon="github"
        title="GitHub"
        detail={cleanUrl(github)}
      />

      <SourceRow 
        to={feedback}
        icon="comment"
        title="Feedback"
      />

      <SourceRow 
        to={docs}
        icon="book"
        title="Documentation"
        detail={cleanUrl(docs)}
      />
    </Group>
  ) : null
}
