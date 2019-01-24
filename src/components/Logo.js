import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
// import Image from 'gatsby-image'

import Logo from '../../content/brand/goldilocks-logo-knot-black-solid.svg'

export default styled(Logo).attrs({
  title: 'goldilocks design'
})`
  opacity: 0.125;
`

// const LogoStyled = styled(Image)`
//   width: 100%;
// `

// const Logo = props => (
//   <StaticQuery
//     query={identityQuery}
//     render={data => (
//         <LogoStyled
//           fluid={data.logo.childImageSharp.fluid}
//           alt={data.site.siteMetadata.title}
//           {...props}
//         />
//       )
//     }
//   />
// )

// const identityQuery = graphql`
//   query IdentityQuery {
//     logo: file(absolutePath: { regex: "/goldilocks-design-icon.png/" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_noBase64
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

// export default Logo