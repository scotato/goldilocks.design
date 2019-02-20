import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Link from '../components/Link'

const Tech = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: ${props => props.theme.size.layout[500]};
  width: ${props => props.theme.size.layout[850]};
  /* justify-content: center; */
  /* align-items: center; */
`

const Image = styled(Img)`
  width: 100%;
  border-radius: ${props => props.theme.size.layout[300]};
`

const TechPage = ({ data: { page, tech }}) => (
  <Layout page={page}>
    <Device page={{
      ...page,
      title: tech.title,
      to: '/tech'
    }} footer={true} shouldShowNav>
      <Tech>
        {console.log(tech)}
        <div>
          <Image
            title={tech.title}
            fluid={tech.logo.childImageSharp.fluid}
          />
        </div>
        <div>
          <h1>{tech.title}</h1>
          <p>{tech.description}</p>
          <Link to={tech.url}>{tech.url}</Link>
          <br />
          {tech.urlSource && <Link to={tech.urlSource}>{tech.urlSource}</Link>}
          <p>{tech.dateAdded}</p>
        </div>
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
  query($slug: String!) {
    page: appsYaml(id: { eq: "tech" }) {
      ...AppInfo
    }
    tech: techYaml(slug: { eq: $slug }) {
      slug
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
`