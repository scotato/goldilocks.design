import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Indicator = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.theme.size[400]};
  font-size: ${props => props.theme.size[500]};
  font-weight: 600;
`

const Badge = styled.span`
  margin-left: ${props => props.theme.size[200]};
  font-size: ${props => props.theme.size[400]};
  line-height: 1;
`

export default props => props.badge ? (
  <Indicator title={`${props.title} ${props.badge}`}>
    <Icon name={props.icon} size={400} />
    <Badge>{props.badge}</Badge>
  </Indicator>
) : null
