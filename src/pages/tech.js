import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Device from '../components/Device'
import AppIcon from '../components/AppIcon'

const TechGrid = styled.div`
  display: grid;
  margin: auto;
  padding: 0 ${props => props.theme.size.layout[350]};
  width: ${props => props.theme.size.layout[850]};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: ${props => props.theme.size.layout[500]};
  grid-row-gap: ${props => props.theme.size.layout[400]};
  justify-self: center;
`

const Image = styled(Img)`
  width: 100%;
  border-radius: ${props => props.theme.size.layout[300]};
`

const TechPage = ({ data: { page, tech }}) => (
  <Layout page={page}>
    <Device
      page={page}
      footer
      shouldShowNav
    >
      <TechGrid>
        {tech.edges.map(item => (
          <AppIcon colorWeight={100} to={`/tech/${item.node.slug}`}>
            <Image
              title={item.node.title}
              fluid={item.node.logo.childImageSharp.fluid}
            />
          </AppIcon>
        ))}
      </TechGrid>
    </Device>
  </Layout>
)

TechPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
  }),
}

export default TechPage

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "tech" }) {
      ...AppInfo
    }
    tech: allTechYaml {
      edges {
        node {
          ...TechInfo
        }
      }
    }
  }
`