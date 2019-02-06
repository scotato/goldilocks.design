import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
// import Time from '../components/Time'

// const LockScreen = styled.div`
//   position: relative;
//   display: grid;
//   grid-template-columns: auto 80vw auto;
//   grid-template-rows: 15vh 55vh 15vh 15vh;
//   grid-template-areas:
//     ". header ."
//     ". body ."
//     "divider divider divider"
//     "footer footer footer";
//   min-height: 100vh;
//   pointer-events: none;
//   z-index: 10;
// `

// const LockScreenDivider = styled.div`
//   grid-area: divider;
//   background-color: ${props => props.theme.colors.black[100]};
// `

// const LockScreenFooter = styled.footer`
//   grid-area: footer;
//   background-color: ${props => props.theme.colors.black[100]};
//   border-bottom: 1em solid ${props => props.theme.colors.primary};
// `

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
      >
        <Device />
        {/* <LockScreen> */}
          {/* <Time /> */}
          {/* <LockScreenDivider>
            <BlobAnimated />
          </LockScreenDivider>
          <LockScreenFooter /> */}
        {/* </LockScreen> */}
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/avatar-scotato.jpg/" }) {
      childImageSharp {
        fixed(width: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            author
            title
            intro
            date
            banner {
              childImageSharp {
                fixed(width: 256) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            icon {
              childImageSharp {
                fixed(width: 256) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`