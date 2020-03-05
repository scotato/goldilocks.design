import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Indicator = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.theme.size[400]};
  font-weight: 700;
  color: ${props => props.theme.color[props.color]};

  svg {
    max-width: 100%;
  }
`

const Badge = styled.span`
  margin-left: ${props => props.theme.size[200]};
  line-height: 1;
`

export default props => props.badge ? (
  <Indicator title={`${props.title} ${props.badge}`} color={props.color}>
    <Icon name={props.icon} />
    <Badge>{props.badge}</Badge>
  </Indicator>
) : null
