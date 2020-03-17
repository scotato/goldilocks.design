import React from "react"
import { ThemeProvider } from 'styled-components'

import useDarkMode from 'use-dark-mode'
import { useNavigation } from '../hooks'
import theme from '../theme'

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

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
)
