import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import WindowSize from "@reach/window-size"

import theme from '../styles/theme'
import SEO from './SEO'
import GlobalStyle from '../styles/global-style'

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto ${props => props.theme.size.layout[900]} auto;
  grid-template-rows: ${props => props.theme.size.layout[400]} auto ${props => props.theme.size.layout[400]};
  grid-template-areas:
    ". . ."
    ". layout-body ."
    ". . .";
  min-height: 100vh;
  width: 100vw;
`

export default ({ children }) => (
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
        {size => (
          <ThemeProvider theme={theme(size)}>
          <>
            <GlobalStyle />
            <SEO title={data.site.siteMetadata.title} />
            <Layout>
              {children}
            </Layout>
          </>
        </ThemeProvider>
        )}
      </WindowSize>
    )}
  />
)
