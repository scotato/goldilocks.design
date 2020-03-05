import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import ProjectHeader from '../components/ProjectHeader'
import Gallery from '../components/Gallery'
import ActivityList from '../components/ActivityList'
import ResourceList from '../components/ResourceList'
import ContentList from '../components/ContentList'
import { Back, LinkIcon } from '../components/Link'
import RepositoryIndicators from '../components/RepositoryIndicators'
 
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

export default ({ data: { project }, location: { pathname } }) => {
  const { badge, title, description, logo, gallery, projects, posts, tools, status, github } = project.frontmatter
  const { createdAt, committedAt, version, commits } = github
  const website = github.homepageUrl
  const githubUrl = !github.isPrivate && github.url
  const feedback = `${pathname}/feedback`

  return (
    <Layout>
      <SEO title={title} description={description} badge={badge.publicURL} />
      <Header
        title={title}
        primary={<Back to='projects'>Projects</Back>}
        secondary={
          <>
            <LinkIcon to={website} icon="link" size={600} />
            <LinkIcon to={githubUrl} icon="github" size={600} />
            <LinkIcon to={feedback} icon="comment" size={600} />
          </>
        }
      />

      <Project>
        <ProjectHeader
          title={title}
          description={description}
          badge={logo.childImageSharp.fluid}
          indicators={
            <RepositoryIndicators
              status={status}
              commits={commits}
              version={version}
            />
          }
        />
        
        {gallery && <Gallery images={gallery} />}
        
        <div dangerouslySetInnerHTML={{ __html: project.html }} />

        <ResourceList
          website={website}
          github={githubUrl}
          feedback={feedback}
        />

        <ActivityList
          createdAt={createdAt}
          updatedAt={committedAt}
          commits={commits}
          version={version}
          status={status}
        />

        <ContentList
          projects={projects}
          posts={posts}
          tools={tools}
        />
      </Project>
  </Layout>
  )
} 

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Project
      frontmatter {
        ...ProjectFrontmatter
        ...Collections
      }
    }
  }
`