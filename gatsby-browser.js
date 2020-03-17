import iconsInit from './src/theme/icons'
import wrapWithProvider from "./src/plugins/wrapWithProvider"
import wrapWithLayout from "./src/plugins/wrapWithLayout"

export const onClientEntry = iconsInit
export const wrapRootElement = wrapWithProvider
export const wrapPageElement = wrapWithLayout
