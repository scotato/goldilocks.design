import React from 'react'
import styled from 'styled-components'

const Group = styled.div``

const Title = styled.div`
  display: grid;
  padding: ${props => props.theme.size[300]} ${props => props.theme.size[500]};
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.color.default};
  grid-template-columns: auto auto 1fr;
  grid-column-gap: ${props => props.theme.size[300]};
  align-items: center;
  text-transform: uppercase;
`

const Body = styled.div`
  will-change: background-color;
  transition: background-color 0.2s ease-out;
  border-radius: ${props => props.theme.size[500]};
  overflow: hidden;

  & > * {
    margin-bottom: 0;
    border-radius: 0;
    border-bottom: ${props => props.theme.size[100]} solid ${props => props.theme.grayscale[300]};

    &:last-child {
      border-bottom-left-radius: ${props => props.theme.size[500]};
      border-bottom-right-radius: ${props => props.theme.size[500]};
    }

    .dark-mode & {
      border-color: ${props => props.theme.grayscale[900]};
    }
  }
`

const Caption = styled.div`
  padding: ${props => props.theme.size[300]} ${props => props.theme.size[500]};
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.color.default};
`

export default props => (
  <Group>
    <Title>{props.title}</Title>
    <Body>{props.children}</Body>
    <Caption>{props.caption}</Caption>
  </Group>
)