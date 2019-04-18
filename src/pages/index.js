import React from 'react'
import { graphql } from 'gatsby'

import Card, { Cards } from '../components/Card'
import { AppBadge } from '../components/AppIcon'

export default props => (
  <Cards>
    {props.data.posts.edges.map(({node: post}) => (
      <Card
        key={post.title}
        title={post.frontmatter.title}
        detail={`${post.timeToRead} minute read`}
        date={post.frontmatter.date}
        to={post.fields.slug}
        badge={
          <AppBadge
            icon='fa-book-open'
            color='yellow'
            colorWeight={500}
            isCircle
          />
        }
      />
    ))}
  </Cards>
)

export const query = graphql`
  fragment ScreenInfo on ScreensYaml {
    id
    icon
    title
    color
    colorWeight
  }
`

export const pageQuery = graphql`
  query {
    page: screensYaml(id: { eq: "lock" }) {
      ...ScreenInfo
    }
    posts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`