import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useLocalStorage } from '../hooks'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Card from '../components/Card'
import Icon from '../components/Icon'
import Avatar from '../components/Avatar'

const Action = styled(Icon)`
  color: ${props => props.theme.colors[props.color][props.colorWeight]};
  cursor: pointer;
`

const Posts = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: ${props => props.displayMode === 'grid' ? '1fr 1fr' : '1fr'};
  grid-row-gap: ${props => props.displayMode === 'card' ? props.theme.size.layout[300] : 0};
  width: ${props => props.displayMode === 'grid' ? '100%' : props.theme.size.layout[800]};
`

const Post = styled(Card)`
  flex: 1;
`
const PostImg = styled(Img)`
  flex: 1;
`

const BlogPage = props => {
  const displayModes = ['card', 'grid', 'list']
  const [displayMode, setDisplayMode] = useLocalStorage('layout.blog', 'card')  
  const page = props.data.page.edges[0].node.frontmatter
  const posts = props.data.posts.edges
  const isList = displayMode === 'list'
  const nextDisplayMode = () => {
    const currentIndex = displayModes.indexOf(displayMode)
    const nextMode = currentIndex + 1 === displayModes.length
      ? displayModes[0]
      : displayModes[currentIndex + 1]
    setDisplayMode(nextMode)
  }

  return (
    <Layout page={page}>
      <Device
        headerAction={
          <Action
            name={displayMode}
            color={page.color}
            colorWeight={page.colorWeight}
            onClick={nextDisplayMode}
          />
        }
        page={page}
        shouldShowNav
      >
        <Posts displayMode={displayMode}>
          {posts.map(post => (
            <Post
              key={post.node.frontmatter.published}
              hero={!isList && <PostImg fluid={post.node.frontmatter.badge.childImageSharp.fluid} />}
              badge={!isList
                ? <Avatar />
                : <PostImg fluid={post.node.frontmatter.badge.childImageSharp.fluid} />
              }
              title={post.node.frontmatter.title}
              detail={`${post.node.timeToRead} min read`}
              date={post.node.frontmatter.published}
              to={`/blog${post.node.fields.slug}`}
            />
          ))}
        </Posts>
      </Device>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape(PropTypes.object),
    page: PropTypes.shape({
      edges: PropTypes.array,
    }),
    apps: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogPage

export const pageQuery = graphql`
  query {
    page: allMarkdownRemark(filter: { frontmatter: { slug: { eq: "blog" } } }) {
      edges {
        node {
          frontmatter {
            icon
            title
            color
            colorWeight
          }
        }
      }
    }
    posts: allMarkdownRemark(filter: { frontmatter: { published: { ne: null } } }, sort: { fields: [frontmatter___published] }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            author
            title
            intro
            published
            badge {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
