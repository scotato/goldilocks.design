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

const uniq = (acc, cur) => acc.includes(cur) ? acc : [...acc, cur]
const fill = (acc, cur) => [...acc, cur / 2, cur, cur + cur / 2]
const flatten = multiplier =>
  (acc, cur, i, arr) => ({...acc, [(i + 1) * multiplier]: cur})

export const typography = getScale(1, 1.5, -2)
  .map(val => `${val}em`)
  .reduce(flatten(100), {})

export const layout = getScale(2, 2, 1)
  .reduce(fill, [])
  .reduce(uniq, [])
  .map(val => `${val}px`)
  .reduce(flatten(50), {})

  export default { typography, layout }
  