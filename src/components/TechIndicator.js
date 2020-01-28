import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const TechIndicator = styled.div`
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
  <TechIndicator color={props.color}>
    <Icon name={props.icon} size={500} />
    <Badge>{props.badge}</Badge>
  </TechIndicator>
) : null
