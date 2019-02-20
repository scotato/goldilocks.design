import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Link from '../components/Link'
import Icon from '../components/Icon'

const Tech = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: ${props => props.theme.size.layout[500]};
  width: ${props => props.theme.size.layout[850]};
  align-items: center;
`

const TechLink = styled(Link)`
  margin-right: ${props => props.theme.size.layout[100]};
`

const TechIcon = styled(Icon)`
  width: ${props => props.theme.size.layout[400]};
  color: ${props => props.theme.colors.black[500]};
`

const TechIconLink = ({icon, to}) => to ? (
  <TechLink to={to}>
    <TechIcon name={icon} />
  </TechLink>
) : null

const Image = styled(Img)`
  width: 100%;
  border-radius: ${props => props.theme.size.layout[300]};
`

const TechBadge = props => (
  <div>
    <Image {...props} />
  </div>
)

const TechPage = ({ data: { page, tech }}) => (
  <Layout page={page}>
    <Device
      page={{
        ...page,
        title: tech.title,
        to: '/tech'
      }}
      footer
      shouldShowNav>
      <Tech>
        <TechBadge
          title={tech.title}
          fluid={tech.logo.childImageSharp.fluid}
        />
        <div>
          <h1>{tech.title}</h1>
          <p>{tech.description}</p>
          <p>
            <TechIconLink to={tech.url} icon="fa-link" />
            <TechIconLink to={tech.urlSource} icon="fa-github" />
            <TechIconLink to={tech.urlApi} icon="api" />
          </p>
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
      urlApi
      logo {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      dateAdded
    }
  }
`