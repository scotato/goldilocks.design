import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky'
 
import Layout from '../components/Layout'
import { ButtonLink } from '../components/Button'
import { BlobAnimated } from '../components/Blob'
import Banner from '../components/Banner'
import BlogBar from '../components/BlogBar'
// import UserBar from '../components/UserBar'
import Message from '../components/Message'
import SEO from '../components/SEO'

const TitleMessage = styled(Message)`
  margin-top: 2rem;
  margin-bottom: -2rem;
`

const Page = styled.div`
  position: relative;
  display: grid;
  margin: 0 auto;
  grid-template-columns: auto 80vw auto;
  grid-template-rows: 15vh auto 15vh;
  grid-template-areas:
    ". blogbar ."
    ". posts ."
    ". userbar .";
  /* background-color: ${props => props.theme.colors.black[100]}; */
  border-bottom: 1vh solid ${props => props.theme.colors.primary};
`

const PageBlob = styled(BlobAnimated)`
  /* grid-area: 1 / 1 / 2 / 3; */
  /* height: 15vh; */
`

const Posts = styled.article`
  margin: 0 auto;
  grid-area: posts;
  background-color: white;
  padding: 5rem 10rem;
  width: 80vw;
  max-width: 1152px;
  background-color: white;
`

const PageShadow = styled.div`
  margin: 5vh 0;
  grid-area: 1 / 2 / 4 / 3;
  border-radius: 5vh;
  box-shadow: 0 1vh 5vh rgba(0, 0, 0, 0.1);
  z-index: 1;
  pointer-events: none;
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
  /* background-color: white; */
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

const OverlayTop = styled.div`
  position: absolute;
  user-select: none;
  width: 100vw;
  height: 15vh;
  overflow: hidden;
`

const StickyContainerBlogbar = styled(StickyContainer)`
  background-color: ${props => props.theme.colors.black[100]};
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
        <StickyContainerBlogbar>
          <Sticky>
            {({
              style,
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => (
              <OverlayTop style={style}>
                <PageBlob />
              </OverlayTop>
            )}
          </Sticky>

          <Page>
            <BlogBar
              siteTitle={siteTitle}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              timeToRead={post.timeToRead}
            />
            <Posts dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* <UserBar /> */}
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
            <PageShadow />
          </Page>

        </StickyContainerBlogbar>
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