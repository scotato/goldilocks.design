import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useLocalStorage } from '../hooks'

import Layout from '../components/Layout'
import Device from '../components/Device'

const Toggle = styled.input.attrs({
  type: 'checkbox'
})`
  display: flex;
  width: ${props => props.theme.size.layout[500]};
  border-radius: ${props => props.theme.size.layout[400]};
  background-color: ${props => props.isChecked
    ? props.theme.colors.green[500]
    : props.theme.colors.black[300]
  };
  cursor: pointer;
  appearance: none;

  &[type="checkbox"] {
    padding: ${props => props.theme.size.layout[100]};
  }

  &:before {
    display: block;
    margin-left: ${props => props.isChecked ? 'auto' : 0};    
    width: ${props => props.theme.size.layout[400]};
    height: ${props => props.theme.size.layout[400]};
    border-radius: ${props => props.theme.size.layout[400]};
    background-color: ${props => props.theme.colors.black[100]};
    content: " ";
  }
`


const SettingsPage = ({ data: { page }}) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('settings:isDarkMode', false)

  return (
    <Layout page={page}>
      <Device page={page} isDarkMode={isDarkMode} shouldShowNav>
        <Toggle isChecked={isDarkMode} onClick={() => setIsDarkMode(!isDarkMode)} />
        dark mode
      </Device>
    </Layout>
  )
}

SettingsPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
  }),
}

export default SettingsPage

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "settings" }) {
      ...AppInfo
    }
  }
`