import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Link from '../components/Link'
import Icon from '../components/Icon'

const Blog = styled.div`
  padding: ${props => props.theme.size[900]};
`

const Post = styled(Link)`
  display: grid;
  margin-bottom: ${props => props.theme.size[500]};
  margin-left: ${props => props.theme.size[900]};
  margin-right: ${props => props.theme.size[900]};
  padding: ${props => props.theme.size[500]};
  background-color: ${props => props.theme.grayscale[100]};
  border-radius: ${props => props.theme.size[500]};
  grid-template-areas: 
    "badge title detail arrow"
    "badge description detail arrow";
  grid-template-columns: ${props => props.theme.size[900]} auto auto ${props => props.theme.size[600]};
  grid-template-rows: ${props => props.theme.size[700]} ${props => props.theme.size[700]};
  grid-column-gap: ${props => props.theme.size[500]};
  color: inherit;

  &:hover {
    color: inherit;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Badge = styled(Img)`
  width: ${props => props.theme.size[900]};
  height: ${props => props.theme.size[900]};
  border-radius: ${props => props.theme.size[400]};
  grid-area: badge;
`

const Title = styled.span`
  grid-area: title;
  font-weight: 700;
`

const Description = styled.span`
  grid-area: description;
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[500]};
`

const Detail = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: detail;
  font-size: ${props => props.theme.size[500]};
  color: ${props => props.theme.grayscale[500]};
`

const Arrow = styled(Icon).attrs({
  name: 'chevron-right',
  size: 600
})`
  margin: auto 0;
  grid-area: arrow;
  color: ${props => props.theme.grayscale[400]};
`

const BlogPage = ({ data: { posts }}) => (
  <Blog>
    {posts.edges.map(({node: post}) => (
      <Post to={post.fields.slug}>
        <Badge fluid={post.frontmatter.badge.childImageSharp.fluid} />
        <Title>{post.frontmatter.title}</Title>
        <Description>{post.timeToRead} Minute Read</Description>
        <Detail>{moment(post.frontmatter.createdAt).format("MMM YYYY")}</Detail>
        <Arrow />
      </Post>
    ))}
  </Blog>
)

export default BlogPage

export const query = graphql`
  fragment Post on MarkdownRemark {
    fields {
      slug
      app {
        ...AppInfo
      }
    }
    timeToRead
    frontmatter {
      author
      title
      createdAt
      badge {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "blog" }) {
      ...AppInfo
    }
    posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            ...Post
          }
        }
    }
  }
`
