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

const TechLinks = styled.div`
  display: flex;
  align-items: center;
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
`

const TechHeader = styled.header`
  display: flex;
`

const TechHeaderTitle = styled.h1``

const TechHeaderLinks = styled.div`
  margin-left: ${props => props.theme.size.layout[250]};
`

const TechBadge = ({className, ...props}) => (
  <div className={className}>
    <Image {...props} />
  </div>
)

const TechBadgeSmall = styled(TechBadge)`
  margin-right: ${props => props.theme.size.layout[250]};
  width: ${props => props.theme.size.layout[400]};
`

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
          <TechHeader>
            <TechHeaderTitle>{tech.title}</TechHeaderTitle>
            <TechHeaderLinks>
              <TechIconLink to={tech.url} icon="fa-link" />
              <TechIconLink to={tech.urlSource} icon="fa-github" />
              <TechIconLink to={tech.urlApi} icon="api" />
            </TechHeaderLinks>
          </TechHeader>
          <p>{tech.description}</p>
          <TechLinks>
            {tech.tech && tech.tech.map(item => (
              <Link to={`/tech/${item.slug}`}>
                <TechBadgeSmall
                  title={item.title}
                  fluid={item.logo.childImageSharp.fluid}
                />
              </Link>
            ))}
          </TechLinks>
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

export const query = graphql`
  fragment TechInfo on TechYaml {
    id
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
  fragment TechInfoEdges on TechYaml {
    ...TechInfo
    tech {
      ...TechInfo
    }
  }
`

export const pageQuery = graphql`
  query($slug: String!) {
    page: appsYaml(id: { eq: "tech" }) {
      ...AppInfo
    }
    tech: techYaml(slug: { eq: $slug }) {
      ...TechInfoEdges
    }
  }
`