import styled from 'styled-components'

const isPrimary = (is, isNot) => props =>
  props.type === 'primary' ? is : isNot

const getBackgroundColor = props => isPrimary(
  props.theme.colors.blue,
  props.theme.colors.black[100],
)

const getTextColor = props => isPrimary(
  'white',
  props.theme.colors.black[900],
)

const Bubble = styled.div`
  position: relative;
  padding: 0.7rem 1.25rem;
  border-radius: 24px;
  background-color: ${getBackgroundColor};
  color: ${getTextColor};
  min-height: 48px;
  line-height: 1.25;
  will-change: border-radius;
  transition: border-radius 0.1s ease-out;
`

export default Bubble
