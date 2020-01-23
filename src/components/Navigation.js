import React from 'react'
import styled from 'styled-components'
import NavigationRow from './NavigationRow'

const Navigation = styled.nav`
  background-color: ${props => props.theme.grayscale[200]};
  border-radius: ${props => props.theme.size[500]};
`

const items = [{
  path: '/feed',
  icon: 'bells',
  title: 'Feed',
  subtitle: '',
  detail: ''
}, {
  path: '/projects',
  icon: 'computer-classic',
  title: 'Projects',
  subtitle: '',
  detail: ''
}, {
  path: '/blog',
  icon: 'typewriter',
  title: 'Blog',
  subtitle: '',
  detail: ''
}, {
  path: '/tech',
  icon: 'window',
  title: 'Tech',
  subtitle: '',
  detail: ''
}]

export default () => (
  <Navigation>
    {items.map(item => (
      <NavigationRow
        key={item.path}
        icon={item.icon}
        title={item.title}
        subtitle={item.subtitle}
        detail={item.detail}
        to={item.path}
      />
    ))}
  </Navigation>
)