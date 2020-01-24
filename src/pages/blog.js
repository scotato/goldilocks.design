import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogPage = ({ data: { posts }}) => (
  <Layout>
    {posts.edges.map(post => post.node.frontmatter.title)}
  </Layout>
)

export default BlogPage

export const query = graphql`
  fragment Post on MarkdownRemark {
    fields {
      slug
      collection
      app {
        ...AppInfo
      }
    }
    timeToRead
    frontmatter {
      author
      title
      intro
      twitter
      github
      date
      badge {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "blog" }) {
      ...AppInfo
    }
    posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            ...Post
          }
        }
    }
  }
`
