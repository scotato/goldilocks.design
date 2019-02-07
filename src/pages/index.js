import React from 'react'
import styled from 'styled-components'
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

const P = styled.p`
  line-height: 1;
  margin: 0;
`

const H100 = styled(P)`
  font-size: ${props => props.theme.size.typography[100]};
`

const H200 = styled(P)`
  font-size: ${props => props.theme.size.typography[200]};
`

const H300 = styled(P)`
  font-size: ${props => props.theme.size.typography[300]};
`

const H400 = styled(P)`
  font-size: ${props => props.theme.size.typography[400]};
`

const H500 = styled(P)`
  font-size: ${props => props.theme.size.typography[500]};
`

const H600 = styled(P)`
  font-size: ${props => props.theme.size.typography[600]};
`

const H700 = styled(P)`
  font-size: ${props => props.theme.size.typography[700]};
`

const H800 = styled(P)`
  font-size: ${props => props.theme.size.typography[800]};
`

const H900 = styled(P)`
  font-size: ${props => props.theme.size.typography[900]};
`

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
        <Device>
          <H100>100</H100>
          <H200>200</H200>
          <H300>300</H300>
          <H400>400</H400>
          <H500>500</H500>
          <H600>600</H600>
          <H700>700</H700>
          <H800>800</H800>
          <H900>900</H900>
        </Device>
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