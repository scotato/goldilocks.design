import React from 'react'
import styled from 'styled-components'

const Group = styled.div`
  margin-bottom: ${props => props.theme.size[500]};
`

const Title = styled.div`
  display: flex;
  padding: ${props => props.theme.size[300]} ${props => props.theme.size[500]};
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.color.default};
  align-items: center;
  text-transform: uppercase;
`

const Detail = styled.span`
  margin-left: auto;
`

const Body = styled.div`
  border-radius: ${props => props.theme.size[500]};
  overflow: hidden;

  & > a,
  & > textarea,
  & > label,
  & > div {
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 0;
    border-bottom: ${props => props.theme.size[100]} solid ${props => props.theme.grayscale[200]};

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
    <Title>
      {props.title}
      <Detail>{props.detail}</Detail>
    </Title>
    <Body>{props.children}</Body>
    <Caption>{props.caption}</Caption>
  </Group>
)