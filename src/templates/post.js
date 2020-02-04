import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import ContentList from '../components/ContentList'
import { Back } from '../components/Link'
 
const Post = styled.article`
  margin: 0 ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[900]};
`

const Content = styled.div`
  margin: 0 ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[900]};
`

export default props => (
  <>
    <Header
      title={props.data.post.frontmatter.title}
      primary={<Back to='posts'>Posts</Back>}
    />
    <Post dangerouslySetInnerHTML={{ __html: props.data.post.html }} />
    
    <Content>
      <ContentList
        title={props.data.post.frontmatter.title}
        projects={props.data.post.frontmatter.projects || []}
        posts={props.data.post.frontmatter.posts || []}
        tools={props.data.post.frontmatter.tools || []}
      />
    </Content>
  </>
)

export const pageQuery = graphql`
  query PostsPostBySlug($slug: String!) {
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
        tools
      }
    }
  }
`