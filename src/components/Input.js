import styled from 'styled-components'

const Input = styled.input`
  padding: 0 2.5vh;
  height: 5vh;
  border-radius: 2.5vh;
  border: 0;
  min-width: 100%;
  justify-self: stretch;
  align-self: stretch;
  color: ${props => props.theme.colors.black[900]};
  transition: box-shadow 0.1s ease-out;
  
  &::placeholder {
    color: ${props => props.theme.colors.black[200]};
    font-weight: 300;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px dodgerblue;
  }
`

export default Input
