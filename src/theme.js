import { css } from 'styled-components'

const breakpoints = {
  tabletHorizontal: 1024,
  tabletVertical: 768,
  phone: 576
}

// Iterate through the sizes and create a media template
const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

const grayscale = {
  100: 'hsl(60, 25%, 98%)', // #FCFCFA
  200: 'hsl(48, 16%, 94%)', // #F2F1ED
  300: 'hsl(47, 20%, 91%)', // #EDEBE4
  400: 'hsl(47, 14%, 87%)', // #E3E1DA
  500: 'hsl(46, 13%, 81%)', // #D4D1C7
  600: 'hsl(51, 7%, 65%)', // #ADABA0
  700: 'hsl(50, 3%, 46%)', // #797873
  800: 'hsl(60, 2%, 31%)', // #52524E
  900: 'hsl(40, 3%, 19%)', // #333230
}

const color = {
  yellow: 'hsl(47, 100%, 69%)',
  blue: '#1FB4FF',
  green: '#0BDA73',
  red: '#FF5252',
  orange: '#FFA64C',
  pink: '#F76EE0',
  purple: '#955FFF'
}

color.primary = color.blue
color.secondary = color.orange
color.info = color.blue
color.success = color.green
color.warning = color.yellow
color.danger = color.red
color.default = grayscale[500]

const size = {
  100: 2,
  200: 4,
  300: 8,
  400: 12,
  500: 16,
  600: 20,
  700: 32,
  800: 48,
  900: 64
}


export default {
  size,
  grayscale,
  color,
  media
}
