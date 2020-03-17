import React from "react"
import { ServerStyleSheet } from 'styled-components'
import { dom } from "@fortawesome/fontawesome-svg-core"

import iconsInit from './src/theme/icons'
import wrapWithProvider from './src/plugins/wrapWithProvider'

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

export const wrapRootElement = wrapWithProvider
