import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Title = styled.span`
  font-size: calc(${props => props.theme.size[900]} + ${props => props.theme.size[700]});
  line-height: 1;
  font-weight: 800;
`

const HomePage = props => (
  <Title>Activity</Title>
)

export default HomePage

export const pageQuery = graphql`
  query {
    page: screensYaml(id: { eq: "home" }) {
      ...ScreenInfo
    }
  }
`