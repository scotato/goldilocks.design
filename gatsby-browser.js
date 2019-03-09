import React from 'react'
import ReactDOM from 'react-dom'

import { PageBrowser } from './src/components/Page'

export const wrapPageElement = ({ props, element }) => (
  <PageBrowser {...props}>
    {console.log("wrapping page")}
    {element}
  </PageBrowser>
)

export const onClientEntry = () => {
  console.log("We've started!")
}

export const onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
}

export const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    console.log("rendering!")
    ReactDOM.render(element, container, callback)
  }
}
