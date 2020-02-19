import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ContentList from '../components/ContentList'
import { Back, LinkIcon } from '../components/Link'
 
const Post = styled.article`
  margin-top: ${props => props.theme.size[500]};
  margin-bottom: ${props => props.theme.size[900]};

  ${props => props.theme.media.tabletHorizontal`
    margin-bottom: ${props => props.theme.size[500]};
    padding: ${props => props.theme.size[500]};
  `}

  ${props => props.theme.media.phone`
    margin-bottom: ${props => props.theme.size[700]};
    padding: 0 ${props => props.theme.size[500]};
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

export default ({ data: { post }, location: { pathname } }) => {
  const { title, projects, posts, tools } = post.frontmatter

  return (
    <Layout>
      <Header
        title={title}
        primary={<Back to='posts'>Posts</Back>}
        secondary={<LinkIcon to={`${pathname}/feedback`} icon="comment" size={600} />}
      />
      
      <Content>
        <Post dangerouslySetInnerHTML={{ __html: post.html }} />
        
        <ContentList
          projects={projects}
          posts={posts}
          tools={tools}
        />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostsPostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Post
      frontmatter {
        ...PostFrontmatter
        ...Collections
      }
    }
  }
`