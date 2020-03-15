import { library } from "@fortawesome/fontawesome-svg-core"
import * as solid from "./icons-solid"
import * as brand from "./icons-brand"

export const iconsSolid = Object.keys(solid)
export const iconsBrand = Object.keys(brand)

export default () => {
  iconsSolid.forEach(icon => library.add(solid[icon]))
  iconsBrand.forEach(icon => library.add(brand[icon]))
}
