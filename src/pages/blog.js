import React from 'react'
import moment from 'moment'
import { graphql } from 'gatsby'
import LinkRow, { Container } from '../components/LinkRow'

const BlogPage = ({ data: { posts }}) => (
  <Container>
    {posts.edges.map(({node: post}) => (
      <LinkRow
        to={post.fields.slug}
        key={post.fields.slug}
        badge={post.frontmatter.badge.childImageSharp.fluid}
        title={post.frontmatter.title}
        description={`${post.timeToRead} Minute Read`}
        detail={moment(post.frontmatter.createdAt).format("MMM YYYY")}
      />
    ))}
  </Container>
)

export default BlogPage

export const query = graphql`
  fragment Post on MarkdownRemark {
    fields {
      slug
      app {
        ...AppInfo
      }
    }
    timeToRead
    frontmatter {
      author
      title
      createdAt
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
