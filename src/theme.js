import { css } from 'styled-components'

const device = {
  desktopLarge: "1440px",
  desktop: "1280px",
  tabletHorizontal: "1024px",
  tabletVertical: "768px",
  phone: "414px",
  phoneSmall: "375px"
}

// Iterate through the sizes and create a media template
const media =  Object.keys(device).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${device[label]}) {
      ${css(...args)}
    }
  `

  return acc
}, {})

media["landscape"] = (...args) => css`
  @media (orientation:landscape) {
    ${css(...args)}
  }
`

media["portrait"] = (...args) => css`
  @media (orientation:portrait) {
    ${css(...args)}
  }
`

const grayscale = {
  100: 'hsl(200, 10%, 97.5%)', 
  200: 'hsl(200, 10%, 95%)', 
  300: 'hsl(200, 10%, 90%)', 
  400: 'hsl(200, 10%, 80%)', 
  500: 'hsl(200, 10%, 50%)', 
  600: 'hsl(200, 10%, 40%)', 
  700: 'hsl(200, 10%, 30%)', 
  800: 'hsl(200, 10%, 15%)',
  900: 'hsl(200, 10%, 5%)',
  hex: '#73848c'
}

const color = {
  yellow: 'hsl(47, 92.5%, 50%)',
  yellowLight: 'hsl(47, 100%, 60%)',
  yellowDark: 'hsl(47, 100%, 40%)',
  blue: 'hsl(200, 92.5%, 50%)',
  blueLight: 'hsl(200, 100%, 60%)',
  blueDark: 'hsl(200, 100%, 40%)',
  green: 'hsl(150, 92.5%, 50%)',
  greenLight: 'hsl(150, 90%, 60%)',
  greenDark: 'hsl(150, 90%, 40%)',
  greenHex: '#0AF580',
  red: 'hsl(0, 92.5%, 50%)',
  redLight: 'hsl(0, 100%, 60%)',
  redDark: 'hsl(0, 100%, 40%)',
  orange: 'hsl(30, 92.5%, 50%)',
  orangeLight: 'hsl(30, 100%, 60%)',
  orangeDark: 'hsl(30, 100%, 40%)',
  pink: 'hsl(310, 92.5%, 50%)',
  pinkLight: 'hsl(310, 90%, 60%)',
  pinkDark: 'hsl(310, 90%, 40%)',
  purple: 'hsl(260, 92.5%, 50%)',
  purpleLight: 'hsl(260, 100%, 60%)',
  purpleDark: 'hsl(260, 100%, 40%)'
}

color.primary = color.blue
color.secondary = color.orange
color.info = color.blue
color.success = color.green
color.warning = color.yellow
color.danger = color.red
color.default = grayscale[500]

const size = {
  100: '2px',
  200: '4px',
  300: '8px',
  400: '12px',
  500: '16px',
  600: '20px',
  700: '32px',
  800: '48px',
  900: '64px'
}

export default {
  size,
  grayscale,
  color,
  media,
  device
}
