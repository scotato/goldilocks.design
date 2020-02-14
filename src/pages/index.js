import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout, { Container } from '../components/Layout'
import Header from '../components/Header'
import Emoji from '../components/Emoji'
import Card from '../components/Card'
import Indicators from '../components/Indicators'

const IndexCard = styled(Card)`
  margin-bottom: ${props => props.theme.size[800]};
`

const HomePage = ({ data: { projects } }) => (
  <Layout isRoot>
    <Header title={<Emoji name="fingers-crossed" size={700} />} />
    <Container>
      {projects.edges.map(({node: project}) => (
        <IndexCard
          to={project.fields.slug}
          key={project.fields.slug}
          card={project.frontmatter.gallery && project.frontmatter.gallery[0].img.childImageSharp.fluid}
          badge={project.frontmatter.logo.childImageSharp.fluid}
          title={project.frontmatter.title}
          description={project.frontmatter.description}
          indicators={
            <Indicators
              createdAt={project.frontmatter.github && project.frontmatter.github.createdAt}
              updatedAt={project.frontmatter.github && project.frontmatter.github.updatedAt}
              commits={project.frontmatter.github && project.frontmatter.github.commits}
              version={project.frontmatter.github && project.frontmatter.github.version}
              status={project.frontmatter.status}
            />
          }
        />
      ))}
    </Container>
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    projects: allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___updatedAt, frontmatter___commits], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          ...Project
        }
      }
    }
  }
`
