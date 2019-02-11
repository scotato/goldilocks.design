import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'


const BlogPage = props => {
  const page = props.data.page.edges[0].node.frontmatter

  return (
    <Layout page={page}>
      <Device page={page} shouldShowNav />
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape(PropTypes.object),
    page: PropTypes.shape({
      edges: PropTypes.array,
    }),
    apps: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogPage

export const pageQuery = graphql`
  query {
    page: allMarkdownRemark(filter: { frontmatter: { slug: { eq: "blog" } } }) {
      edges {
        node {
          frontmatter {
            icon
            title
            color
            colorWeight
          }
        }
      }
    }
  }
`

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