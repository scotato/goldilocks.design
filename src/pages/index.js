import React from 'react'
import styled from 'styled-components'
import { Slider } from '../components/Gallery'
import Card from '../components/Card'
import Header from '../components/Header'
import ProjectIndicators from '../components/ProjectIndicators'

const Container = styled.div`
  margin: 0 ${props => props.theme.size[700]};
  padding: 0 ${props => props.theme.size[900]};
  padding-top: ${props => props.theme.size[700]};
`

const HomePage = ({ data: { posts, projects } }) => (
  <>
    <Header title="Goldilocks Design" />
    <Container>
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
    </Container>
  </>
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
