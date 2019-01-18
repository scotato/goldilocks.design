import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
 
import Layout from '../components/Layout'
import { ButtonLink } from '../components/Button'
import { BlobAnimated } from '../components/Blob'
import Banner from '../components/Banner'
import BlogBar from '../components/BlogBar'
import Message from '../components/Message'
import SEO from '../components/SEO'

const TitleMessage = styled(Message)`
  margin-top: 2rem;
  margin-bottom: -2rem;
`

const Page = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 80vw auto;
  grid-template-rows: 15vh auto 15vh;
  grid-template-areas:
    ". blogbar ."
    ". body ."
    ". userbar .";
  min-height: 100vh;
  background-color: ${props => props.theme.colors.black[100]};
`

const PageBlob = styled(BlobAnimated)`
  grid-area: 1 / 1 / 2 / 3;
`

const Posts = styled.article`
  grid-area: body;
  background-color: white;
  padding: 5rem 10rem;
  max-width: 1152px;
`

const Pager = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: userbar;
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

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const avatar = this.props.data.avatar
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
 
    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
      >
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Banner type="post" title={post.frontmatter.title}>
          <TitleMessage
            avatar={avatar.childImageSharp.fixed}
            author={post.frontmatter.author}
            children={post.frontmatter.intro}
          />
        </Banner>
        
        <Page>
          <PageBlob />
          <BlogBar
            siteTitle={siteTitle}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            timeToRead={post.timeToRead}
          />
          {/* <Icon fixed={post.frontmatter.icon.childImageSharp.fixed} /> */}
          <Posts>
            {/* <h1>{post.frontmatter.title}</h1> */}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Posts>
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
        </Page>
      </Layout>
    )
  }
}
 
export default BlogPostTemplate
 
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    avatar: file(absolutePath: { regex: "/avatar-scotato.jpg/" }) {
      childImageSharp {
        fixed(width: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        author
        title
        intro
        icon {
          childImageSharp {
            fixed(width: 256) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        date
      }
    }
  }
`