import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
// import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Network from '../components/Network'
// import AppIcon from '../components/AppIcon'

const Apps = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default props => (
  <Layout
    location={props.location}
    // title={props.data.site.siteMetadata.title}
  >
    <ThemeConsumer>
      {theme => (
        <Device
          headerNav={<Network />}
          // headerIcon={}
          color={theme.colors.yellow[500]}
          lockAction={() => props.navigate(props.location.pathname === '/' ? '/home' : '/')}
        >
          <Apps>
            
          </Apps>
        </Device>
      )}
    </ThemeConsumer>
  </Layout>
)

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           timeToRead
//           frontmatter {
//             author
//             title
//             intro
//             date
//             banner {
//               childImageSharp {
//                 fixed(width: 256) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//             icon {
//               childImageSharp {
//                 fixed(width: 256) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `