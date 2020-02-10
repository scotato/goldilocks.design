import React from 'react'
import styled from 'styled-components'

import Link from '../components/Link'
import Icon from '../components/Icon'

const Social = styled.div`
  display: flex;
  margin-top: ${props => props.theme.size[500]};
  justify-content: center;
  align-items: center;
`

const SocialLink = styled(Link)`
  padding: ${props => props.theme.size[400]};
  color: ${props => props.theme.grayscale[300]};

  .dark-mode & {
    color: ${props => props.theme.grayscale[600]};
  }

  &:hover {
    color: ${props => props.theme.grayscale[300]};

    .dark-mode & {
      color: ${props => props.theme.grayscale[600]};
    }
  }
`

export default () => (
  <Social>
    <SocialLink title="Twitter Feed" to="https://twitter.com/scotato">
      <Icon name="twitter" size={700} />
    </SocialLink>

    <SocialLink title="Github Source" to="https://github.com/scotato/goldilocks.design">
      <Icon name="github" size={700} />
    </SocialLink>

    <SocialLink title="RSS Feed" to="https://goldilocks.design/rss.xml">
      <Icon name="rss" size={700} />
    </SocialLink>
  </Social>
)