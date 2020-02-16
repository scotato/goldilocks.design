import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/Layout'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import { Back } from '../components/Link'
import PostIndicators from '../components/PostIndicators'
import Badges from '../components/Badges'

const PostsPage = ({ data: { posts } }) => (
  <Layout>
    <Header
      title="Posts"
      primary={<Back to='/' />}
    />
    <Container>
      {posts.edges.map(({node: post}) => (
        <Card
          to={post.fields.slug}
          key={post.fields.slug}
          card={post.frontmatter.badge.childImageSharp.fluid}
          title={post.frontmatter.title}
          indicators={<PostIndicators post={{...post.frontmatter, timeToRead: post.timeToRead}} />}
          detail={<Badges tools={post.frontmatter.tools} size={600} />}
        />
      ))}
    </Container>
  </Layout>
)

export default PostsPage

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
            frontmatter {
              ...PostFrontmatter
              ...Collections
            }
          }
        }
    }
  }
`
