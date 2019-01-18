import styled from 'styled-components'

const Banner = styled.h1`
  position: relative;
  display: flex;
  margin-bottom: -10vh;
  left: 0;
  width: 100vw;
  padding: 0 25vw;
  height: 90vh;
  background-color: ${props => props.theme.colors.primary};
  font-size: 20vh;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  text-align: center;
  line-height: 1;
  user-select: none;
  letter-spacing: -0.025em;
`

export default Banner
