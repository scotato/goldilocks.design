import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import SEO from './SEO'
import Logo from './Logo'
// import Avatar from './Avatar'
import GlobalStyle from '../styles/global-style'


const LogoNav = styled(Link).attrs({
  children: <Logo />,
  to: '/'
})`
  grid-area: logo;
  margin: 33%;
`

const Icon = styled.div`
  grid-area: icon;
  margin: 33%;
`

const LayoutGrid = styled.div`
  display: grid;
  min-height: 100vh;
  background-color: white;
  border-top: 4px solid ${props => props.theme.colors.primary};
  border-bottom: 4px solid ${props => props.theme.colors.primary};
  grid-template-columns: 10vw 80vw 10vw;
  grid-template-rows: 10vw auto auto auto;
  grid-template-areas: 
    "logo . icon"
    ". body .";
`

const Body = styled.main`
  grid-area: body;
  width: 100%;
  max-width: 768px;
  margin: 0 auto 5vw;
`

const Layout = ({ children, icon }) => (
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
        <LayoutGrid>
          <GlobalStyle />
          <SEO />
          <LogoNav />
          <Icon children={icon} />
          <Body>
            {children}
          </Body>
        </LayoutGrid>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
