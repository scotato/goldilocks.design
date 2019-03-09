import React from 'react'
import { ThemeProvider } from 'styled-components'

import { usePage, useView, useViewEffect } from '../hooks'
import GlobalStyle from '../styles/global-style'
import getTheme from '../styles/theme'
import Layout from './Layout'
import Device from './Device'
import SEO from './SEO'

const Page = props => {
  const [{ id, title, color, colorWeight }, setPage] = usePage()
  const theme = props.theme || getTheme()
  const shouldSetPage = props.data.page.id !== id
  shouldSetPage && setPage.page(props.data.page)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle bodyBg={theme.colors[color][colorWeight]} />
        <SEO title={title} />
        <Layout>
          <Device>
            {props.children}
          </Device>
        </Layout>
      </>
    </ThemeProvider>
  )
}

export const PageBrowser = ({children, ...props}) => {
  const [view] = useView()
  useViewEffect()

  return (
    <Page theme={getTheme(view)} {...props}>
      {children}
    </Page> 
  )
}

export default Page