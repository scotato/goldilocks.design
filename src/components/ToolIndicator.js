import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const ToolIndicator = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.theme.size[300]};
  font-size: ${props => props.theme.size[500]};

  svg {
    color: ${props => props.theme.color[props.color]};
  }
`

const Badge = styled.span`
  margin-left: ${props => props.theme.size[200]};
  font-size: ${props => props.theme.size[400]};
  line-height: 1;
`

export default props => props.badge ? (
  <ToolIndicator title={props.title} color={props.color}>
    <Icon name={props.icon} size={400} />
    <Badge>{props.badge}</Badge>
  </ToolIndicator>
) : null
