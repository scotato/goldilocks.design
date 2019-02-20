import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Card, { Cards } from '../components/Card'

const Image = styled(Img)`
  flex: 1;
`

const TechPage = ({ data: { page, tech }}) => (
  <Layout page={page}>
    <Device page={page} shouldShowNav>
      <Cards>
        {tech.edges.map(item => (
          <Card
            key={item.node.id}
            badge={<Image fluid={item.node.logo.childImageSharp.fluid} />}
            title={item.node.title}
            detail={item.node.description}
            date={item.node.dateAdded}
            to={`/`}
          />
        ))}
      </Cards>
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