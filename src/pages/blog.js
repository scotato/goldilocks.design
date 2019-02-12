import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Notification from '../components/Notification'
import Icon from '../components/Icon'

const Action = styled(Icon)`
  color: ${props => props.theme.colors[props.color][props.colorWeight]};
  cursor: pointer;
`

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Post = styled(Notification)``

const posts = [
  {
    title: 'Design Systems',
    detail: 'Blog',
    date: '2019-02-11',
    to: '/blog/design-systems',
    icon: 'blog',
    color: 'yellow',
    colorWeight: 500
  }, {
    title: 'Goldilocks Design',
    detail: 'Projects',
    date: '2019-01-10',
    to: '/projects/goldilocks-design',
    icon: 'projects',
    color: 'blue',
    colorWeight: 500
  }, {
    title: 'Gatsby',
    detail: 'Tools',
    date: '2017-01-09',
    to: '/tools/gatsby',
    icon: 'tools',
    color: 'orange',
    colorWeight: 500
  }
]

const BlogPage = props => {
  const displayModes = ['card', 'grid', 'list']
  const [displayMode, setDisplayMode] = useState('card')  
  const page = props.data.page.edges[0].node.frontmatter
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
        <Posts>
          {posts.map(post => (
            <Post key={post.date} {...post} />
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
  }
`

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           timeToRead
//           frontmatter {
//             author
//             title
//             intro
//             date
//             banner {
//               childImageSharp {
//                 fixed(width: 256) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//             icon {
//               childImageSharp {
//                 fixed(width: 256) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `