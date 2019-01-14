import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = styled(Link)`
  display: flex;
  padding: 1em 1.5em;
  border-radius: 2em;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.gold[900]};
  font-weight: 500;

  &:hover {
    color: ${props => props.theme.colors.gold[900]};
  }
`

export default Button
