import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ContentList from '../components/ContentList'
import { Back } from '../components/Link'
 
const Post = styled.article`
  margin-bottom: ${props => props.theme.size[900]};

  ${props => props.theme.media.tabletHorizontal`
    margin: 0 ${props => props.theme.size[700]};
    padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  `}

  ${props => props.theme.media.phone`
    margin: 0;
    margin-bottom: ${props => props.theme.size[700]};
    padding: 0;
  `}
`

const Content = styled.div`
  margin: 0 ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[900]};

  ${props => props.theme.media.tabletHorizontal`
    margin: 0 ${props => props.theme.size[700]};
    padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  `}

  ${props => props.theme.media.phone`
    margin: 0;
    padding: ${props => props.theme.size[500]};
  `}
`

export default props => (
  <Layout>
    <Header
      title={props.data.post.frontmatter.title}
      primary={<Back to='posts'>Posts</Back>}
    />
    
    <Content>
      <Post dangerouslySetInnerHTML={{ __html: props.data.post.html }} />
      
      <ContentList
        title={props.data.post.frontmatter.title}
        projects={props.data.post.frontmatter.projects || []}
        posts={props.data.post.frontmatter.posts || []}
        tools={props.data.post.frontmatter.tools || []}
      />
    </Content>
  </Layout>
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
        projects
        posts
        tools
      }
    }
  }
`