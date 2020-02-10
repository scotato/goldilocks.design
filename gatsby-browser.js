import React from "react"
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import theme from './src/theme'

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
