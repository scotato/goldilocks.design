import React from 'react'
import styled from 'styled-components'
import { Slider } from '../components/Gallery'
import Header from '../components/Header'
import Emoji from '../components/Emoji'
import Card from '../components/Card'
import ProjectIndicators from '../components/ProjectIndicators'

const Container = styled.div`
  display: flex;
  margin: 0 ${props => props.theme.size[700]};
  padding: 0 ${props => props.theme.size[900]} ${props => props.theme.size[600]};
  min-height: 100%;
  align-items: center;
`

const HomePage = ({ data: { posts, projects } }) => (
  <>
    <Header title={<Emoji name="fingers-crossed" size={700} />} />
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
