import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Card from '../components/Card'

const Posts = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-row-gap: ${props => props.theme.size.layout[300]};
  width: ${props => props.theme.size.layout[800]};
  
  ${props => props.theme.media.tabletHorizontal`
    width: ${props => props.theme.size.layout[850]};
  `}

  ${props => props.theme.media.tabletVertical`
    width: 100%;
  `}
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
        key={post.node.frontmatter.date}
        badge={<PostImg fluid={post.node.frontmatter.badge.childImageSharp.fluid} />}
        title={post.node.frontmatter.title}
        detail={`${post.node.timeToRead} min read`}
        date={post.node.frontmatter.date}
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
