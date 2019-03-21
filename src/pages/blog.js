import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Card from '../components/Card'
import Avatar from '../components/Avatar'

const Posts = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: ${props => props.displayMode === 'grid' ? '1fr 1fr' : '1fr'};
  grid-row-gap: ${props => props.displayMode === 'card' ? props.theme.size.layout[300] : 0};
  width: ${props => props.displayMode === 'grid' ? '100%' : props.theme.size.layout[800]};
`

const Post = styled(Card)`
  flex: 1;
`
const PostImg = styled(Img)`
  flex: 1;
`

const BlogPage = ({ data: { posts }}) => (
  <Posts>
    {posts.edges.map(post => (
      <Post
        key={post.node.frontmatter.published}
        hero={true && <PostImg fluid={post.node.frontmatter.badge.childImageSharp.fluid} />}
        badge={true
          ? <Avatar />
          : <PostImg fluid={post.node.frontmatter.badge.childImageSharp.fluid} />
        }
        title={post.node.frontmatter.title}
        detail={`${post.node.timeToRead} min read`}
        date={post.node.frontmatter.published}
        to={post.node.fields.slug}
      />
    ))}
  </Posts>
)

BlogPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape(PropTypes.object),
    page: PropTypes.shape({
      edges: PropTypes.array,
    }),
    apps: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogPage

export const query = graphql`
  fragment Post on MarkdownRemark {
    fields {
      slug
    }
    timeToRead
    frontmatter {
      author
      title
      intro
      published
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
        sort: { fields: [frontmatter___published], order: DESC }
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
