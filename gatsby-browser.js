import React from "react"
import { ThemeProvider } from 'styled-components'
import { library } from "@fortawesome/fontawesome-svg-core"
import * as svgIcons from "@fortawesome/free-solid-svg-icons"
import * as svgBrandIcons from "@fortawesome/free-brands-svg-icons"

import theme from './src/theme'
import { icons, iconsBrand } from './src/components/Icon'
import useDarkMode from 'use-dark-mode'
import { useNavigation } from './src/hooks'

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

export const onClientEntry = () => {
  icons.forEach(icon => library.add(svgIcons[icon]))
  iconsBrand.forEach(icon => library.add(svgBrandIcons[icon]))
}

export const wrapRootElement = ({ element }) => (
  <Provider>
    {element}
  </Provider>
)
