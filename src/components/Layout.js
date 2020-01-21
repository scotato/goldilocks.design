import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import SEO from './SEO'
import theme from '../theme'

const Layout = styled.div`
  display: grid;
  margin: 0 auto;
  padding: ${props => props.theme.size[700]};
  min-height: 100%;
  max-width: ${props => props.theme.device.desktopLarge};
`

export default props => {
  const { post, project } = props.data
  const banner = post || project

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={banner && banner.frontmatter.title} description={banner && `${banner.timeToRead} minute read`} />
        {props.children}
      </Layout>
    </ThemeProvider>
  )
}
