import React from 'react'
import styled from 'styled-components'
import NavigationRow from './NavigationRow'

const Navigation = styled.nav`
  background-color: ${props => props.theme.grayscale[200]};
  border-radius: ${props => props.theme.size[500]};
`

const items = [{
  path: '/feed',
  emoji: 'bell',
  title: 'Feed',
  subtitle: '',
  detail: ''
}, {
  path: '/projects',
  emoji: 'clover',
  title: 'Projects',
  subtitle: '',
  detail: ''
}, {
  path: '/tech',
  emoji: 'heart',
  title: 'Tech',
  subtitle: '',
  detail: ''
}, {
  path: '/blog',
  emoji: 'thought',
  title: 'Blog',
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