// returns an exponentially scaled array
const getScale = (base = 2, multiplier = 2, offset = 0) => {
  const scale = []
  while (scale.length < 9) {
    let exponent = scale.length + offset
    let value = base * Math.pow(multiplier, exponent).toFixed(3)
    scale.push(value)
  }
  return scale
}

const uniq = (acc, cur) => acc.includes(cur) ? acc : [...acc, cur]
const fill = (acc, cur) => [...acc, cur * 0.5, cur, cur * 1.5]
const flatten = multiplier =>
  (acc, cur, i) => ({...acc, [(i + 1) * multiplier]: cur})

const typography = getScale(1, 1.5, -2)
  .map(val => `${val}em`)
  .reduce(flatten(100), {})

const layout = base => getScale(base, 2, 1)
  .reduce(fill, [])
  .reduce(uniq, [])
  .map(val => `${val}px`)
  .reduce(flatten(50), {})

export default windowSize => {
  const { width, height } = windowSize
  const typographyRatio = 20 / 1280
  const layoutRatio = 2 / 1280
  
  return {
    typography,
    layout: layout(layoutRatio * width),
    typographyBase: `${typographyRatio * width}px`,
    window: windowSize,
    isLandscape: width > height,
    isPortrait: height > width
  }
}
