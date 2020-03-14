import { css } from 'styled-components'

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

export { size, media, device }
