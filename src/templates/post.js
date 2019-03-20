import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import { ButtonLink } from '../components/Button'
import Message from '../components/Message'
// import Banner from '../components/Banner'
// import BlogBar from '../components/BlogBar'
// import SEO from '../components/SEO'

const Intro = styled.div`
  margin-bottom: ${props => props.theme.size.layout[500]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Post = styled.article`
  padding: 0 ${props => props.theme.size.layout[550]};
`

const Pager = styled.nav`
  display: flex;
  margin: 0 auto 5vh;
  padding: 1vh;
  justify-content: space-between;
  align-items: center;
  grid-area: userbar;
  width: 80vw;
  max-width: 1152px;
  border-bottom-left-radius: 5vh;
  border-bottom-right-radius: 5vh;
  overflow: hidden;
`

const ButtonPrevious = styled(ButtonLink)`
  margin-right: auto;
`

const ButtonNext = styled(ButtonLink)`
  margin-left: auto;
`

const ArrowPrevious = styled.span.attrs({
  children: '←'
})`
  margin-right: 0.5em;
`

const ArrowNext = styled.span.attrs({
  children: '→'
})`
  margin-left: 0.5em;
`

export default props => {
  const post = props.data.post
  const avatar = props.data.avatar
  // const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt} /> */}
      {/* <Banner type="post" title={post.frontmatter.title}>
        <TitleMessage
          avatar={avatar.childImageSharp.fixed}
          author={post.frontmatter.author}
          children={post.frontmatter.intro}
          to={post.frontmatter.introLink}
        />
      </Banner> */}

      {/* <BlogBar
        siteTitle={siteTitle}
        title={post.frontmatter.title}
        date={post.frontmatter.published}
        timeToRead={post.timeToRead}
      /> */}
      <Intro>
        <h1>{post.frontmatter.title}</h1>
        <Message
          avatar={avatar.childImageSharp.fixed}
          author={post.frontmatter.author}
          children={post.frontmatter.intro}
          to={post.frontmatter.introLink}
        />
      </Intro>
      <Post dangerouslySetInnerHTML={{ __html: post.html }} />
      <Pager>
        {previous && (
          <ButtonPrevious to={previous.fields.slug} rel="prev">
            <ArrowPrevious /> {previous.frontmatter.title}
          </ButtonPrevious>
        )}
        {next && (
          <ButtonNext to={next.fields.slug} rel="next">
            {next.frontmatter.title} <ArrowNext />
          </ButtonNext>
        )}
      </Pager>
    </>
  )
}
 
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    page: appsYaml(id: { eq: "blog" }) {
      ...AppInfo
    }
    avatar: file(absolutePath: { regex: "/avatar-scotato.jpg/" }) {
      childImageSharp {
        fixed(width: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        author
        title
        published
        intro
        introLink
      }
    }
  }
`