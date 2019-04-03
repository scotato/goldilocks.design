import React from 'react'
// import ReactDOM from 'react-dom'

import Page from './src/components/Page'

export const wrapPageElement = ({ props, element }) => (
  <Page {...props}>
    {element}
  </Page>
)

// export const onClientEntry = () => {
//   console.log("We've started!")
// }

// export const onInitialClientRender = () => {
//   console.log("ReactDOM.render has executed")
// }

// export const replaceHydrateFunction = () => {
//   return (element, container, callback) => {
//     console.log("rendering!")
//     ReactDOM.render(element, container, callback)
//   }
// }
