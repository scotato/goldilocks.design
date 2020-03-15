import React from "react"
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { dom } from "@fortawesome/fontawesome-svg-core"

import iconsInit from './src/theme/icons'
import theme from './src/theme'
import useDarkMode from 'use-dark-mode'
import { useNavigation } from './src/hooks'

export const replaceRenderer = ({
  setHeadComponents,
}) => {
  // Add font-awesome in SSR/build
  iconsInit()
  const faStyles = <style>{dom.css()}</style>

  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet()
  const styleElement = sheet.getStyleElement()
  
  setHeadComponents([faStyles, styleElement])
}

const Provider = props => {
  const darkMode = useDarkMode()
  const navigation = useNavigation()

  const state = {
    isDarkMode: darkMode.value,
    isNavigationOpen: navigation.isOpen
  }

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

