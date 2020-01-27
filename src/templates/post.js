import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
const Post = styled.article`
  padding: ${props => props.theme.size[900]};
`

export default props => (
  <Post dangerouslySetInnerHTML={{ __html: props.data.post.html }} />
)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        collection
      }
      frontmatter {
        author
        title
        date
        intro
        twitter
        github
        tech {
          ...Tech
        }
      }
    }
  }
`