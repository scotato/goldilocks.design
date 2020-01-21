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
  100: 'hsl(200, 10%, 97.5% )', 
  200: 'hsl(200, 10%, 95% )', 
  300: 'hsl(200, 10%, 90% )', 
  400: 'hsl(200, 10%, 80% )', 
  500: 'hsl(200, 10%, 50% )', 
  600: 'hsl(200, 10%, 40% )', 
  700: 'hsl(200, 10%, 30% )', 
  800: 'hsl(200, 10%, 15% )',
  900: 'hsl(200, 10%, 2.5% )' 
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
