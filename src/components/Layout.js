import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import { useTheme, usePage, useView, useViewEffect } from '../hooks'
import SEO from './SEO'
import GlobalStyle from '../styles/global-style'

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto ${props => props.theme.size.layout[900]} auto;
  grid-template-rows: ${props => props.theme.size.layout[400]} auto ${props => props.theme.size.layout[400]};
  grid-template-areas:
    ". layout-body-margin-top ."
    "layout-body-margin-left layout-body layout-body-margin-right"
    ". layout-body-margin-bottom .";
  min-height: 100vh;
  width: 100vw;

  ${props => props.theme.media.tabletHorizontal`
    grid-template-columns: ${props => props.theme.size.layout[500]} auto ${props => props.theme.size.layout[500]};
    grid-template-rows: ${props => props.theme.size.layout[500]} auto ${props => props.theme.size.layout[500]};
  `}

${props => props.theme.media.phone`
    grid-template-columns: ${props => props.theme.size.layout[500]} auto ${props => props.theme.size.layout[500]};
    grid-template-rows: ${props => props.theme.size.layout[500]} auto ${props => props.theme.size.layout[500]};
  `}
`

export default props => {
  const [{ id, title, color, colorWeight }, setPage] = usePage()
  const [{ width, height }, setView] = useView()
  const [theme] = useTheme()
  const shouldSetWidth = theme.window.height !== height
  const shouldSetHeight = theme.window.width !== width
  const shouldSetPage = props.page && (props.page.id !== id)
  shouldSetWidth && setView.width(width)
  shouldSetHeight && setView.height(height)
  shouldSetPage && setPage.page(props.page)
  
  useViewEffect()

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle bodyBg={theme.colors[color][colorWeight]} />
        <SEO title={title} />
        <Layout>
          {props.children}
        </Layout>
      </>
    </ThemeProvider>
  )
}
