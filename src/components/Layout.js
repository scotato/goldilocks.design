import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import SEO from './SEO'
import Link from './Link'
import theme from '../theme'

const Layout = styled.div`
  display: grid;
  margin: 0 auto;
  min-height: 100%;
  max-width: ${props => props.theme.device.desktopLarge};
  grid-template-columns: ${props => props.theme.device.phoneSmall} auto;
`

const Navigation = styled.nav`
  display: grid;
  padding: ${props => props.theme.size[700]};
  grid-template-rows: auto auto auto auto;
  grid-row-gap: ${props => props.theme.size[300]};
`

const Body = styled.main`
  display: grid;
  padding: ${props => props.theme.size[700]};
  background-color: ${props => props.theme.grayscale[100]};
`

export default props => {
  const { post, project } = props.data
  const banner = post || project

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={banner && banner.frontmatter.title} description={banner && `${banner.timeToRead} minute read`} />
        
        <Navigation>
          <h1>{props.title}</h1>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/tech">Tech</Link>
        </Navigation>
        
        <Body>
          {props.children}
        </Body>
      </Layout>
    </ThemeProvider>
  )
}
