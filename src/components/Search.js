import React from 'react'
import styled from 'styled-components'
import Input from './Input'

const Search = styled(Input)`
  padding: ${props => props.theme.size[200]} ${props => props.theme.size[500]};
  margin-bottom: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[600]};
  background-color: ${props => props.theme.grayscale[200]};

  input {
    text-align: left;
  }

  .dark-mode & {
    color: ${props => props.theme.grayscale[400]};
    background-color: ${props => props.theme.grayscale[800]};
  }
`

export default props => (
  <Search
    name="search"
    type="search"
    icon="search"
    placeholder="Search..."
    maxLength={30}
  />
)
