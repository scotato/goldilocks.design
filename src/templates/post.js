import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import { ButtonLink } from '../components/Button'

const Post = styled.article`
  padding: ${props => props.theme.size.layout[400]} ${props => props.theme.size.layout[550]};
`

const Pager = styled.nav`
  display: flex;
  margin: 0 auto 5vh;
  padding: 1vh;
  justify-content: space-between;
  align-items: center;
  grid-area: userbar;
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

export default ({ data, pageContext }) => {
  const { previous, next } = pageContext

  return (
    <>
      <Post dangerouslySetInnerHTML={{ __html: data.post.html }} />
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
    page: appsYaml(id: { eq: "blog" }) {
      ...AppInfo
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