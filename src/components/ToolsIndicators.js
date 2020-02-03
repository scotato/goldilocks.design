import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import ToolIndicator from './ToolIndicator'

const ToolsIndicators = styled.div`
  display: flex;
`

export default props => {
  const data = useStaticQuery(graphql`
    query ToolsIndicatorsQuery {
      site {
        siteMetadata {
          content {
            id
            icon
            slug
            title
            color
          }
        }
      }
    }
  `)
  
  const { content } = data.site.siteMetadata
  
  const indicators = [
    content.find(item => item.id === 'projects'),
    content.find(item => item.id === 'posts'),
    content.find(item => item.id === 'tools')
  ]

  indicators[0].badge = props.projectCount;
  indicators[1].badge = props.postCount;
  indicators[2].badge = props.toolCount;

  return (
    <ToolsIndicators>
      {indicators.map(item => (
        <ToolIndicator 
          key={item.id}
          icon={item.icon}
          color={item.color}
          title={item.title}
          badge={item.badge}
        />
      ))}
    </ToolsIndicators>
  )
}
