import moment from 'moment'
import numeral from 'numeral'

export const formatNumber = number => number > 999 ? numeral(number).format('0.0a') : number
export const formatDate = date => moment(date).format("MMM YYYY")

export const statusIcon = status => {
  switch (status) {
    case 'prototype':
      return 'pencil-ruler'
    case 'development':
      return 'tools'
    case 'production':
      return 'drafting-compass'
    case 'archived':
      return 'archive'
    default:
      return null
  }
}

export const statusBadge = status => {
  switch (status) {
    case 'prototype':
      return 'Prototype'
    case 'development':
      return 'Development'
    case 'production':
      return 'Production'
    case 'archived':
      return 'Archived'
    default:
      return null
  }
}

export default () => null
