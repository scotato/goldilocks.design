// returns an exponentially scaled array [1, ..., 9]
const getScale = (base = 2, multiplier = 2, offset = 0) => {
  const scale = []
  while (scale.length < 9) {
    let exponent = scale.length + offset
    let value = base * Math.pow(multiplier, exponent).toFixed(3)
    scale.push(value)
  }
  return scale
}

// reducers
const fill = (acc, cur, i, arr) => [...acc, (arr[i - 1] || 0) * 0.5 + cur * 0.5, cur]
const flatten = multiplier => (acc, cur, i) => ({...acc, [(i + 1) * multiplier]: cur})

const typography = getScale(1, 1.5, -2)
  .map(val => `${val}em`)
  .reduce(flatten(100), {}) // {100: 0.44em, 200: 0.67em, ..}

const layout = base => getScale(base, 2, 1)
  .reduce(fill, []) // [1, ..., 18]
  .map(val => `${val}px`)
  .reduce(flatten(50), {}) // {50: 2px, 100: 4px, ...}

export default windowSize => {
  const { width, height } = windowSize
  const typographyRatio = 20 / 1280
  const layoutRatio = 2 / 1280
  
  return {
    typography,
    layout: layout(layoutRatio * width), // pin scale to view width
    typographyBase: `${typographyRatio * width}px`, // pin base to view width
    window: windowSize,
    isLandscape: width > height,
    isPortrait: height > width
  }
}

// layout @ 1280px view width
// 50: 2px,
// 100: 4px,
// 150: 6px,
// 200: 8px,
// 250: 12px,
// 300: 16px,
// 350: 24px,
// 400: 32px,
// 450: 48px,
// 500: 64px,
// 550: 96px,
// 600: 128px,
// 650: 192px,
// 700: 256px,
// 750: 384px,
// 800: 512px,
// 850: 768px,
// 900: 1024px