import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'

const LogoStyled = styled(Image)`
  width: 100%;
`

const Logo = () => (
  <StaticQuery
    query={identityQuery}
    render={data => (
        <LogoStyled
          fixed={data.logo.childImageSharp.fixed}
          alt={data.site.siteMetadata.title}
        />
      )
    }
  />
)

const identityQuery = graphql`
  query IdentityQuery {
    logo: file(absolutePath: { regex: "/goldilocks-design-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Logo