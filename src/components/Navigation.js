import React from 'react'
import styled from 'styled-components'
import NavigationRow from './NavigationRow'

const Navigation = styled.nav`
  background-color: ${props => props.theme.grayscale[100]};
  border-radius: ${props => props.theme.size[500]};
`

const items = [{
  path: '/blog',
  emoji: 'coffee',
  title: 'Blog',
  subtitle: '',
  detail: ''
}, {
  path: '/projects',
  emoji: 'coffee',
  title: 'Projects',
  subtitle: '',
  detail: ''
}, {
  path: '/tech',
  emoji: 'coffee',
  title: 'Tech',
  subtitle: '',
  detail: ''
}]

export default () => (
  <Navigation>
    {items.map(item => (
      <NavigationRow
        key={item.path}
        emoji={item.emoji}
        title={item.title}
        subtitle={item.subtitle}
        detail={item.detail}
        to={item.path}
      />
    ))}
  </Navigation>
)