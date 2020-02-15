import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import Layout from '../components/Layout'
import Header from '../components/Header'
import ProjectHeader from '../components/ProjectHeader'
import Gallery from '../components/Gallery'
import ContentList from '../components/ContentList'
import { Back, LinkIcon } from '../components/Link'
import RepositoryIndicators from '../components/RepositoryIndicators'
import RepositoryRows from '../components/RepositoryRows'
 
const Project = styled.article`
  margin: 0 ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[900]};

  ${props => props.theme.media.tabletHorizontal`
    margin: 0 ${props => props.theme.size[700]};
    padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  `}

  ${props => props.theme.media.phone`
    margin: 0;
    padding: ${props => props.theme.size[500]};
  `}
`

export default ({ data }) => {
  const project = data.project.frontmatter
  const { github } = data.project.frontmatter
  const { createdAt, updatedAt, version, commits } = github

  return (
    <Layout>
      <Header
        title={project.title}
        primary={<Back to='projects'>Projects</Back>}
        secondary={[
          <LinkIcon to={!github.isPrivate && github.url} icon="github" size={600} />,
          <LinkIcon to={github.homepageUrl} icon="external-link" size={600} />
        ]}
      />
      <Project>
        <ProjectHeader
          title={project.title}
          description={project.description}
          badge={project.logo.childImageSharp.fluid}
          indicators={
            <RepositoryIndicators
              createdAt={createdAt}
              updatedAt={updatedAt}
              commits={commits}
              version={version}
            />
          }
        />
        
        {project.gallery && <Gallery images={project.gallery} />}
        
        <div dangerouslySetInnerHTML={{ __html: data.project.html }} />

        <ContentList
          title={project.title}
          projects={project.projects || []}
          posts={project.posts || []}
          tools={project.tools || []}
        />

        <RepositoryRows
          createdAt={createdAt}
          updatedAt={updatedAt}
          commits={commits}
          version={version}
          status={project.status}
        />
      </Project>
  </Layout>
  )
} 

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Project
    }
  }
`