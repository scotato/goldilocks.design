import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import Header from '../components/Header'
import { Body } from '../components/Layout'
import Container from '../components/Container'
import Subscribe from '../components/Subscribe'
import ResourceList from '../components/ResourceList'
import ActivityList from '../components/ActivityList'
import ContentList from '../components/ContentList'
import Link, { Back, LinkIcon } from '../components/Link'
import { Resources, Resource } from '../components/ResourceList'
import { DarkModeRow } from '../components/DarkMode'

const Content = styled(Container)``

const Post = styled.article`
  margin-bottom: ${props => props.theme.size[500]};
  overflow-x: hidden;
  
  a {
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }

  > *:last-child {
    margin-bottom: 0;
  }

  h1 {
    margin-bottom: ${props => props.theme.size[600]};
  }
`

export default ({ data: { post }, location: { pathname } }) => {
  const { hero, title, description, website, createdAt, updatedAt, githubUrl, projects, posts, tools } = post.frontmatter
  const feedback = `${pathname}/feedback`
  const shortcodes = { Link, Resources, Resource, DarkModeRow }

  return (
    <>
      <SEO title={title} description={description} badge={hero.childImageSharp.fluid.src} />
      <Header
        title={title}
        primary={<Back to='posts'>Posts</Back>}
        secondary={
          <>
            <LinkIcon to={website} icon="link" />
            <LinkIcon to={githubUrl} icon="github" />
            <LinkIcon to={feedback} icon="comment" />
          </>
        }
      />
      <Body>
        <Img fluid={hero.childImageSharp.fluid} />
        
        <Content>
          <Post>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </Post>

          <ActivityList
            createdAt={createdAt}
            updatedAt={updatedAt}
          />

          <ResourceList
            website={website}
            github={githubUrl}
            feedback={feedback}
          />

          <Subscribe context={pathname} />
          
          <ContentList
            projects={projects}
            posts={posts}
            tools={tools}
          />
        </Content>
      </Body>
    </>
  )
}

export const pageQuery = graphql`
  query PostsPostBySlug($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      ...Post
      frontmatter {
        ...PostFrontmatter
        ...Collections
      }
    }
  }
`
