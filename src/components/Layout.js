import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import SEO from './SEO'
import GlobalStyle from '../styles/global-style'

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 80vw auto;
  grid-template-rows: auto 90vh auto;
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
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <SEO />
          <Layout>
            {children}
          </Layout>
        </>
      </ThemeProvider>
    )}
  />
)
