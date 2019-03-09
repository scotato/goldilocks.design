import colors from './colors'
import media from './media'
import size from './size'

export default windowSize => ({
  size: size(windowSize),
  colors,
  media,
  window: windowSize
})
