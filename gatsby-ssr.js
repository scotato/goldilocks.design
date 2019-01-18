import { ServerStyleSheet } from 'styled-components'

export const replaceRenderer = ({
  setHeadComponents,
}) => {
  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet()
  const styleElement = sheet.getStyleElement()
  setHeadComponents(styleElement)
}