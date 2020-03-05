import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import { Container } from '../components/Layout'
import Group from '../components/Group'
import Card from '../components/Card'
import { Back } from '../components/Link'
import PostIndicators from '../components/PostIndicators'

const PostsPage = ({ data: { posts } }) => (
  <Layout>
    <SEO />
    <Header
      title="Posts"
      primary={<Back to='/' />}
    />
    <Container>
        {posts.edges.map(({node: post}) => (
          <Card
            to={post.fields.slug}
            key={post.fields.slug}
            badge={post.frontmatter.authorImg.childImageSharp.fluid}
            card={post.frontmatter.badge.childImageSharp.fluid}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            indicators={<PostIndicators post={{...post.frontmatter, timeToRead: post.timeToRead}} />}
            detail={moment(post.frontmatter.createdAt).format("MMM YYYY")}
            badgeCircle
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
        sort: { fields: [frontmatter___createdAt], order: DESC }
      ) {
        edges {
          node {
            ...Post
            frontmatter {
              ...PostFrontmatter
            }
          }
        }
    }
  }
`
