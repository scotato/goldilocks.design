import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import Header from '../components/Header'
import ProjectHeader from '../components/ProjectHeader'
import ProjectIndicators from '../components/ProjectIndicators'
import Gallery from '../components/Gallery'
import ContentList from '../components/ContentList'
import { Back, LinkIcon } from '../components/Link'
 
const Project = styled.article`
  margin: 0 ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[900]};
`

export default ({ data }) => {
  const project = data.project.frontmatter

  return (
    <>
      <Header
        title={project.title}
        primary={<Back to='projects'>Projects</Back>}
        secondary={[
          <LinkIcon to={project.isSourcePublic && project.github} icon="github" size={600} />,
          <LinkIcon to={project.isProjectPublic && project.website} icon="external-link" size={600} />
        ]}
      />
      <Project>
        <ProjectHeader
          title={project.title}
          description={project.description}
          indicators={<ProjectIndicators project={project} />}
          badge={project.logo.childImageSharp.fluid}
        />
        {project.gallery && <Gallery images={project.gallery} />}
        <div dangerouslySetInnerHTML={{ __html: data.project.html }} />
        
        <br />

        <ContentList
          title={project.title}
          projects={project.projects || []}
          posts={project.posts || []}
          tools={project.tools || []}
        />
      </Project>
  </>
  )
} 

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Project
    }
  }
`