import styled from 'styled-components'

const isPrimary = (is, isNot) => props =>
  props.type === 'primary' ? is : isNot

const getBackgroundColor = props => isPrimary(
  props.theme.colors.blue,
  props.theme.colors.black[200],
)

const getTextColor = props => isPrimary(
  'white',
  props.theme.colors.black[900],
)

const Bubble = styled.p`
  display: flex;
  position: relative;
  padding: 0.5em 1.25em;
  margin-bottom: 0;
  align-items: center;
  border-radius: 24px;
  background-color: ${getBackgroundColor};
  color: ${getTextColor};
  min-height: 48px;
  line-height: 1.25;
  will-change: border-radius;
  transition: border-radius 0.1s ease-out;

  ${props => props.theme.media.phone`
    padding: 0.8em 1.25em;
  `}
`

export default Bubble
