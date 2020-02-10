import React from "react"
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import theme from './src/theme'

export const replaceRenderer = ({
  setHeadComponents,
}) => {
  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet()
  const styleElement = sheet.getStyleElement()
  setHeadComponents(styleElement)
}

const Provider = props => {
  const darkMode = useDarkMode()
  const state = { isDarkMode: darkMode.value }

  return (
    <ThemeProvider theme={{...theme, ...state}}>
      {props.children}
    </ThemeProvider>
  )
}

export const wrapRootElement = ({ element }) => (
  <Provider>
    {element}
  </Provider>
)

