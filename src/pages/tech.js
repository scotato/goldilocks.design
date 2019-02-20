import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Device from '../components/Device'
import AppIcon from '../components/AppIcon'

const Tech = styled.div`
  display: grid;
  margin: auto;
  padding: 0 ${props => props.theme.size.layout[350]};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-self: center;
  width: ${props => props.theme.size.layout[850]};
  grid-row-gap: ${props => props.theme.size.layout[400]};
  grid-column-gap: ${props => props.theme.size.layout[500]};
`

const Image = styled(Img)`
  width: 100%;
  border-radius: ${props => props.theme.size.layout[300]};
`

const TechPage = ({ data: { page, tech }}) => (
  <Layout page={page}>
    <Device page={page} footer={true} shouldShowNav>
      <Tech>
        {tech.edges.map(item => (
          <AppIcon colorWeight={100} to={`/tech/${item.node.id}`}>
            <Image
              title={item.node.title}
              fluid={item.node.logo.childImageSharp.fluid}
            />
          </AppIcon>
        ))}
      </Tech>
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
          id
          title
          description
          url
          urlSource
          logo {
            childImageSharp {
              fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dateAdded
        }
      }
    }
  }
`