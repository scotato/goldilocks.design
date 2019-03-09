import React from 'react'
import { ThemeProvider } from 'styled-components'

import { useTheme, usePage, useView, useViewEffect } from '../hooks'
import GlobalStyle from '../styles/global-style'
import Layout from './Layout'
import Device from './Device'
import SEO from './SEO'

const Page = props => {
  const [{ id, title, color, colorWeight }, setPage] = usePage()
  const [theme] = useTheme()
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
  const [{ width, height }, setView] = useView()
  const shouldSetWidth = width !== window.innerWidth
  const shouldSetHeight = height !== window.innerHeight
  shouldSetWidth && setView.width(window.innerWidth)
  shouldSetHeight && setView.height(window.innerHeight)  
  useViewEffect()
  console.log(width, height, shouldSetWidth)
  return (
    <Page {...props}>
      {children}
    </Page> 
  )
}

export default Page