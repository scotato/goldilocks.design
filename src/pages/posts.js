import React from 'react'
import moment from 'moment'
import { graphql } from 'gatsby'
import { Container } from '../components/Layout'
import LinkRow from '../components/LinkRow'
import Header from '../components/Header'
import { Back } from '../components/Link'

const PostsPage = ({ data: { posts } }) => (
  <>
    <Header
      title="Posts"
      primary={<Back to='/' />}
    />
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
  </>
)

export default PostsPage

export const query = graphql`
  fragment Post on MarkdownRemark {
    fields {
      slug
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
      tech {
        ...Tech
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "posts" } } }
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
