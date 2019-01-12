import { css } from 'styled-components'

export const breakpoints = {
  tabletHorizontal: 1024,
  tabletVertical: 768,
  phone: 576
}

// Iterate through the sizes and create a media template
export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
