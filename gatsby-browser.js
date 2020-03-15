import React from "react"
import { ThemeProvider } from 'styled-components'

import theme from './src/theme'
import iconsInit from './src/theme/icons'
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
  iconsInit()
}

export const wrapRootElement = ({ element }) => (
  <Provider>
    {element}
  </Provider>
)
