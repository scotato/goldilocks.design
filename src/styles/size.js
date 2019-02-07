// returns an exponentially scaled array
function getScale (base = 2, multiplier = 2, offset = 0) {
  const scale = []
  while (scale.length < 9) {
    let exponent = scale.length + offset
    let value = base * Math.pow(multiplier, exponent).toFixed(3)
    scale.push(value)
  }
  return scale
}

const fillGaps = (acc, cur, i, arr) =>
  [...acc, (arr[i - 1] || 0) / 2 + cur / 2, cur]

const toUnits = unit => item => `${item}${unit}`

const toIntervals = (acc, cur, i, arr) => ({
  ...acc,
  [(i + 1) * (100 * 9 / arr.length)]: cur
})

const typography = getScale(1, 1.5, -2)
const layout = getScale(2, 2, 1).reduce(fillGaps, [])

export default {
  typography: typography.map(toUnits('em')).reduce(toIntervals, {}),
  layout: layout.map(toUnits('px')).reduce(toIntervals, {})
}
