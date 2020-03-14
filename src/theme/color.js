const grayscale = {
  100: 'hsl(200, 10%, 97.5%)', 
  200: 'hsl(200, 10%, 92.75%)', 
  300: 'hsl(200, 10%, 80%)', 
  400: 'hsl(200, 10%, 65%)', 
  500: 'hsl(200, 10%, 50%)', 
  600: 'hsl(200, 10%, 40%)', 
  700: 'hsl(200, 10%, 20%)', 
  800: 'hsl(200, 10%, 10%)',
  900: 'hsl(200, 10%, 5%)',
  hex: '#c7ced1'
}

const color = {
  yellow: 'hsl(47, 92.5%, 50%)',
  yellowLight: 'hsl(47, 100%, 60%)',
  yellowDark: 'hsl(47, 100%, 40%)',
  blue: 'hsl(210, 100%, 56%)',
  blueLight: 'hsl(210, 100%, 70%)',
  blueDark: 'hsl(210, 100%, 40%)',
  cyan: 'hsl(171, 95%, 54%)',
  cyanLight: 'hsl(171, 95%, 64%)',
  cyanDark: 'hsl(171, 95%, 40%)',
  green: 'hsl(150, 92.5%, 50%)',
  greenLight: 'hsl(150, 90%, 60%)',
  greenDark: 'hsl(150, 90%, 40%)',
  greenHex: '#0AE678',
  red: 'hsl(0, 92.5%, 50%)',
  redLight: 'hsl(0, 100%, 60%)',
  redDark: 'hsl(0, 100%, 40%)',
  orange: 'hsl(30, 92.5%, 50%)',
  orangeLight: 'hsl(30, 100%, 60%)',
  orangeDark: 'hsl(30, 100%, 40%)',
  pink: 'hsl(335, 100%, 70%)',
  pinkLight: 'hsl(335, 100%, 80%)',
  pinkDark: 'hsl(335, 100%, 60%)',
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
color.defaultLight = grayscale[300]
color.defaultDark = grayscale[700]

export { color, grayscale }
