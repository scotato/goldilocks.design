import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Message from '../components/Message'
import Tablet from '../components/Tablet'
import Banner from '../components/Banner'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} shouldUseGrid={false}>
        <SEO />
        <Banner>
          {data.site.siteMetadata.title}
        </Banner>
        <Tablet>
          {posts.map(({ node }) => (
            <Message
              key={node.fields.slug}
              banner={node.frontmatter.banner.childImageSharp.fixed}
              avatar={data.avatar.childImageSharp.fixed}
              author={node.frontmatter.author}
              children={node.frontmatter.title}
              timestamp={node.frontmatter.date}
              timeToRead={node.timeToRead}
              to={node.fields.slug}
              bubbleWidth='256px'
            />
          ))}
        </Tablet>
      </Layout>
    )
  }
}

export default BlogIndex

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