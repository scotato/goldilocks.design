import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout, { Container } from '../components/Layout'
import Header from '../components/Header'
import Group from '../components/Group'
import LinkRowSmall from '../components/LinkRowSmall'
import PostIndicators from '../components/PostIndicators'
import { formatNumber, formatDate } from '../components/Repository'

const Logo = styled(Img)`
  width: ${props => props.theme.size[700]};
  height: ${props => props.theme.size[700]};
`

const HomePage = ({ data }) => {
  const logo = data.brand.frontmatter.logo
  const posts = data.posts.edges.map(edge => edge.node)
  const projects = data.projects.edges.map(edge => edge.node)
  const tools = data.tools.edges.map(edge => edge.node)

  return (
    <Layout isRoot>
      <Header title={<Logo fluid={logo.childImageSharp.fluid} />} />
      <Container>
        <Group title="Recent Posts">
          {posts.map(({
            timeToRead,
            fields: { slug },
            frontmatter: { title, badge, updatedAt, createdAt }
          }) => (
            <LinkRowSmall
              to={slug}
              key={slug}
              badge={badge.childImageSharp.fluid}
              title={title}
              indicators={<PostIndicators post={{ timeToRead }} />}
              detail={formatDate(updatedAt || createdAt)}
            />
          ))}
        </Group>
  
        <Group title="Recent Projects">
          {projects.map(({
            fields: { slug },
            frontmatter: { title, description, logo, github }
          }) => (
            <LinkRowSmall
              to={slug}
              key={slug}
              badge={logo.childImageSharp.fluid}
              title={title}
              description={description}
              detail={formatDate(github.updatedAt || github.createdAt)}
            />
          ))}
        </Group>
  
        <Group title="Tools by Weekly Downloads">
          {tools.map(({
            fields: { slug },
            frontmatter: { title, badge, npm, github }
          }) => (
            <LinkRowSmall
              to={slug}
              key={slug}
              badge={badge.childImageSharp.fluid}
              title={title}
              detail={formatNumber(npm && npm.downloadsWeekly)}
            />
          ))}
        </Group>
      </Container>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    brand: markdownRemark(frontmatter: { id: { eq: "goldilocks-design" } }) {
      frontmatter {
        logo {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "posts" } } }
        sort: { fields: [frontmatter___createdAt], order: DESC }
        limit: 5
      ) {
        edges {
          node {
            ...Post
            frontmatter {
              ...PostFrontmatter
            }
          }
        }
    }
    projects: allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___github___updatedAt, frontmatter___github___createdAt], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...Project
          frontmatter {
            ...ProjectFrontmatter
          }
        }
      }
    }
    tools: allMarkdownRemark(
      filter: { fields: { isPackage: { eq: true } } }
      sort: { fields: [frontmatter___npm___downloadsWeekly], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...Tool
          frontmatter{
            ...ToolFrontmatter
          }
        }
      }
    }
  }
`
