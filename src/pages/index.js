import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Emoji from '../components/Emoji'
import Card from '../components/Card'
import ProjectIndicators from '../components/ProjectIndicators'

const Container = styled.div`
  margin: 0 ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[700]} ${props => props.theme.size[900]};

  ${props => props.theme.media.tabletHorizontal`
    margin: 0 ${props => props.theme.size[700]};
    padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  `}

  ${props => props.theme.media.phone`
    margin: 0;
    padding: ${props => props.theme.size[500]};
  `}

  a {
    margin-bottom: ${props => props.theme.size[800]};

    ${props => props.theme.media.phone`
      margin-bottom: ${props => props.theme.size[700]};
    `}
  }
`

const HomePage = ({ data: { posts, projects } }) => (
  <>
    <Header title={<Emoji name="fingers-crossed" size={700} />} />
    <Container>
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
