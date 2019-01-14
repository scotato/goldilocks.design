import styled from 'styled-components'
import Img from 'gatsby-image'

export default styled(Img).attrs({
  style: {
    width: '3rem',
    height: '3rem'
  }
})`
  border-radius: 50%;
`