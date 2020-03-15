import React from "react"
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { library, dom } from "@fortawesome/fontawesome-svg-core"
import * as svgSolidIcons from "@fortawesome/free-solid-svg-icons"
import * as svgBrandIcons from "@fortawesome/free-brands-svg-icons"

import theme from './src/theme'
import { iconsSolid, iconsBrand } from './src/theme/icons'
import useDarkMode from 'use-dark-mode'
import { useNavigation } from './src/hooks'

export const replaceRenderer = ({
  setHeadComponents,
}) => {
  // Add font-awesome in SSR/build
  iconsSolid.forEach(icon => library.add(svgSolidIcons[icon]))
  iconsBrand.forEach(icon => library.add(svgBrandIcons[icon]))
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

