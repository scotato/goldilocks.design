import colors from './colors'
import media from './media'
import size from './size'

export default (view = {}) => ({
  size: size(view),
  colors,
  media
})
