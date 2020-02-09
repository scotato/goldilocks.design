import React from 'react'
import moment from 'moment'
import { graphql } from 'gatsby'
import { Container } from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import { Back } from '../components/Link'
import ToolsIndicators from '../components/ToolsIndicators'

const PostsPage = ({ data: { posts } }) => (
  <>
    <Header
      title="Posts"
      primary={<Back to='/' />}
    />
    <Container>
    {posts.edges.map(({node: post}) => (
      <Card
        to={post.fields.slug}
        key={post.fields.slug}
        badge={post.frontmatter.badge.childImageSharp.fluid}
        title={post.frontmatter.title}
        description={`${post.timeToRead} Minute Read`}
        indicators={(
          <ToolsIndicators
            projectCount={post.frontmatter.projects ? post.frontmatter.projects.length : 0}
            postCount={post.frontmatter.posts ? post.frontmatter.posts.length : 0}
            toolCount={post.frontmatter.tools ? post.frontmatter.tools.length : 0}
          />
        )}
        detail={moment(post.frontmatter.createdAt).format("MMM YYYY")}
      />
    ))}
    </Container>
  </>
)

export default PostsPage

export const query = graphql`
  fragment Post on MarkdownRemark {
    id
    fields {
      slug
    }
    timeToRead
    frontmatter {
      id
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
      projects
      posts
      tools
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
