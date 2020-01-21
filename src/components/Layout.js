import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import SEO from './SEO'
import theme from '../theme'

const Layout = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.size[600]} auto ${props => props.theme.size[600]};
  grid-template-rows: ${props => props.hasBanner && "auto"} ${props => props.theme.size[400]} auto ${props => props.theme.size[400]};
  grid-template-areas:
    ${props => props.hasBanner && `"banner banner banner"`}
    ". layout-body-margin-top ."
    "layout-body-margin-left layout-body layout-body-margin-right"
    ". layout-body-margin-bottom .";
  min-height: 100%;
  max-width: 100vw;

  ${props => props.theme.media.tabletHorizontal`
    grid-template-columns: ${props => props.theme.size[500]} auto ${props => props.theme.size[500]};
    grid-template-rows: ${props => props.hasBanner && "auto"} ${props => props.theme.size[500]} auto ${props => props.theme.size[500]};
  `}
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
