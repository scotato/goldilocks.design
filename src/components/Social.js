import React from 'react'
import styled from 'styled-components'

import Link from '../components/Link'
import Icon from '../components/Icon'

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialLink = styled(Link)`
  margin: 0 ${props => props.theme.size[250]};
  width: ${props => props.theme.size[400]};
  color: ${props => props.theme.colors.black[400]};

  &:hover {
    color: ${props => props.theme.colors.black[400]};
  }

  ${props => props.theme.media.tabletHorizontal`
    width: ${props.theme.size[450]};
  `}

  ${props => props.theme.media.phone`
    margin: 0 ${props => props.theme.size[350]};
    width: ${props.theme.size[550]};
  `}
`

export default () => (
  <Social>
    <SocialLink title="Twitter Feed" to="https://twitter.com/scotato">
      <Icon name="fa-twitter" />
    </SocialLink>

    <SocialLink title="Github Source" to="https://github.com/scotato/goldilocks.design">
      <Icon name="fa-github" />
    </SocialLink>

    <SocialLink title="RSS Feed" to="https://goldilocks.design/rss.xml">
      <Icon name="rss" />
    </SocialLink>
  </Social>
)