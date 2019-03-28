import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import { ButtonLink } from '../components/Button'
import Icon from '../components/Icon'

const Post = styled.article`
  padding: ${props => props.theme.size.layout[400]} ${props => props.theme.size.layout[550]};
`

const Pager = styled.nav`
  display: grid;
  margin-bottom: ${props => props.theme.size.layout[200]};
  padding: ${props => props.theme.size.layout[400]} ${props => props.theme.size.layout[550]};
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${props => props.theme.size.layout[400]};
`

const Button = styled(ButtonLink)`
  padding: ${props => props.theme.size.layout[200]};
  color: ${props => props.theme.colors.black[100]};
  background-color: ${props => props.theme.colors[props.color][props.colorWeight || 500]};

  &:hover {
    color: ${props => props.theme.colors.black[100]};
  }
`

const ActionIcon = styled(Icon)`
  margin: 0 auto;
`

const ActionButton = ({icon, ...props}) => (
  <Button {...props}>
    <ActionIcon name={icon} />
  </Button>
)

export default ({ data, pageContext }) => {
  const toGithub = `https://github.com/scotato/goldilocks.design/blob/master/src/content${pageContext.slug}index.md`
  const toTwitter = `https://twitter.com/scotato/status/${data.post.frontmatter.twitter}`
  
  return (
    <>
      <Post dangerouslySetInnerHTML={{ __html: data.post.html }} />
      <Pager>
        <ActionButton
          to={toTwitter}
          icon="fa-twitter"
          color="blue"
          title="feedback on twitter"
          rel="twitter"
        />
        <ActionButton
          to={toGithub}
          icon="fa-github"
          color="black"
          colorWeight={900}
          title="edit on github"
          rel="github"
        />
        <ActionButton
          to="/blog"
          icon="fa-book-open"
          color="yellow"
          title="more from the blog"
          rel="next"
        />
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
        twitter
        github
      }
    }
  }
`