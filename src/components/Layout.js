import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import WindowSize from "@reach/window-size"

import { usePage } from '../hooks'
import getTheme from '../styles/theme'
import SEO from './SEO'
import GlobalStyle from '../styles/global-style'

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto ${props => props.theme.size.layout[900]} auto;
  grid-template-rows: ${props => props.theme.size.layout[400]} auto ${props => props.theme.size.layout[400]};
  grid-template-areas:
    ". . ."
    ". layout-body ."
    ". layout-body-margin-bottom .";
  min-height: 100vh;
  width: 100vw;

  ${props => props.theme.media.tabletHorizontal`
    grid-template-columns: ${props => props.theme.size.layout[500]} auto ${props => props.theme.size.layout[500]};
    grid-template-rows: ${props => props.theme.size.layout[500]} auto ${props => props.theme.size.layout[500]};
  `}

${props => props.theme.media.phone`
    grid-template-columns: 0 auto 0;
    grid-template-rows: 0 auto 0;
  `}
`

export default props => {
  const [{ id, title, color, colorWeight }, setPage] = usePage()
  props.page && (props.page.id !== id) && setPage.page(props.page)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <WindowSize>
          {size => {
            const theme = getTheme(size)

            return (
              <ThemeProvider theme={theme}>
              <>
                <GlobalStyle bodyBg={theme.colors[color][colorWeight]} />
                <SEO title={
                  title
                  ? `${title} - ${data.site.siteMetadata.title}`
                  : data.site.siteMetadata.title
                } />
                <Layout>
                  {props.children}
                </Layout>
              </>
            </ThemeProvider>
            )
          }}
        </WindowSize>
      )}
    />
  )
}
