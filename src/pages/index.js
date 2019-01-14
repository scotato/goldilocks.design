import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Message from '../components/Message'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        {posts.map(({ node }) => (
          <Message
            key={node.fields.slug}
            banner={node.frontmatter.banner.childImageSharp.fixed}
            avatar={data.avatar.childImageSharp.fixed}
            author={node.frontmatter.author}
            children={node.frontmatter.title}
            timestamp={node.frontmatter.date}
            to={node.fields.slug}
            justifyContent='center'
          />
        ))}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            author
            title
            intro
            date
            banner {
              childImageSharp {
                fixed(width: 512) {
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