import styled from 'styled-components'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AvatarUser = styled(FontAwesomeIcon).attrs({
  icon: 'user-circle'
})`
  color: ${props => props.theme.colors.black[200]};

  &.svg-inline--fa {
    width: 100%;
    height: 100%;
  }
`

export default styled(Img).attrs({
  style: {
    width: '3rem',
    height: '3rem'
  }
})`
  border-radius: 50%;
`