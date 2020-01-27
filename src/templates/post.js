import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import { ButtonLink } from '../components/Button'
import Icon from '../components/Icon'

const Post = styled.article`
  padding: ${props => props.theme.size[400]} ${props => props.theme.size[550]};

  ${props => props.theme.media.tabletHorizontal`
    padding: ${props => `${props.theme.size[400]} ${props.theme.size[450]}`};
  `}

  ${props => props.theme.media.tabletVertical`
    padding: ${props.theme.size[450]};
  `}

  ${props => props.theme.media.phone`
    padding: ${props.theme.size[400]};
  `}
`

const Actions = styled.nav`
  display: grid;
  margin: 0 ${props => props.theme.size[550]};
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${props => props.theme.size[400]};
  grid-row-gap: ${props => props.theme.size[400]};

  ${props => props.theme.media.tabletHorizontal`
    margin: 0 ${props => props.theme.size[450]};
  `}

  ${props => props.theme.media.tabletVertical`
    margin: 0 ${props => props.theme.size[450]};
  `}

  ${props => props.theme.media.phone`    
    margin: 0;
    grid-template-columns: 1fr;
    padding: 0 ${props.theme.size[400]};
    grid-row-gap: ${props => props.theme.size[450]};
  `}
`

const ActionButton = styled(ButtonLink)`
  padding: ${props => props.theme.size[200]};
  color: ${props => props.theme.grayscale[100]};
  background-color: ${props => props.theme.colors[props.color][props.colorWeight || 500]};
  text-transform: uppercase;
  font-weight: 900;

  &:hover {
    color: ${props => props.theme.grayscale[100]};
  }
`

const ActionIcon = styled(Icon)`
  margin: 0 auto;
`

const Action = ({icon, ...props}) => (
  <ActionButton {...props}>
    <ActionIcon name={icon} />
  </ActionButton>
)

export default ({ data }) => (
  <>
    <Post dangerouslySetInnerHTML={{ __html: data.post.html }} />
    <Actions>
      <Action
        to={`https://twitter.com/scotato/status/${data.post.frontmatter.twitter}`}
        icon="fa-comment"
        color="green"
        title="Feedback on Twitter"
        rel="twitter"
      />
      <Action
        to="/blog"
        icon="fa-book-open"
        color="yellow"
        title="More Blog Posts"
        rel="next"
      />
    </Actions>
  </>
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
      }
    }
  }
`