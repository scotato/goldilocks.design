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

const Pager = styled.nav`
  display: grid;
  margin: 0 ${props => props.theme.size[550]};
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${props => props.theme.size[400]};
  grid-row-gap: ${props => props.theme.size[400]};

  ${props => props.theme.media.tabletHorizontal`
    padding: ${props => `${props.theme.size[400]} ${props.theme.size[450]}`};
  `}

  ${props => props.theme.media.tabletVertical`
    margin-bottom: ${props => props.theme.size[450]};
    padding: ${props.theme.size[450]};
    grid-template-columns: 1fr;
  `}

  ${props => props.theme.media.phone`    
    margin-top: ${props => props.theme.size[500]};
    margin-bottom: ${props => props.theme.size[450]};
    padding: 0 ${props.theme.size[400]};
    grid-row-gap: ${props => props.theme.size[450]};
  `}
`

const Button = styled(ButtonLink)`
  padding: ${props => props.theme.size[200]};
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

export default ({ data }) => (
  <>
    <Post dangerouslySetInnerHTML={{ __html: data.post.html }} />
    <Pager>
      <ActionButton
        to={`https://twitter.com/scotato/status/${data.post.frontmatter.twitter}`}
        icon="fa-twitter"
        color="blue"
        title="feedback"
        rel="twitter"
      />
      <ActionButton
        to="/blog"
        icon="fa-book-open"
        color="yellow"
        title="more"
        rel="next"
      />
    </Pager>
  </>
)

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
        date
        intro
        twitter
        github
      }
    }
  }
`