import React from 'react'
import moment from 'moment'
import { Container } from '../components/Layout'
import { Slider } from '../components/Gallery'
import Card from '../components/Card'
import ProjectIndicators from '../components/ProjectIndicators'

const HomePage = ({ data: { posts, projects } }) => (
  <>
    <Container>
      <strong>Projects</strong>
      <Slider>
        {projects.edges.map(({node: project}) => (
          <Card
            to={project.fields.slug}
            key={project.fields.slug}
            card={project.frontmatter.gallery && project.frontmatter.gallery[0].img.childImageSharp.fluid}
            badge={project.frontmatter.logo.childImageSharp.fluid}
            title={project.frontmatter.title}
            description={project.frontmatter.description}
            indicators={<ProjectIndicators project={project.frontmatter} />}
          />
        ))}
      </Slider>

      <strong>Posts</strong>
      <Slider>
        {posts.edges.map(({node: post}) => (
          <Card
            to={post.fields.slug}
            key={post.fields.slug}
            card={post.frontmatter.badge.childImageSharp.fluid}
            title={post.frontmatter.title}
            description={`${post.timeToRead} Minute Read`}
            detail={moment(post.frontmatter.createdAt).format("MMM YYYY")}
          />
        ))}
      </Slider>
    </Container>
  </>
)

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    projects: allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___updatedAt, frontmatter___commits], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...Project
        }
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { fields: [frontmatter___updatedAt, frontmatter___commits], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`
