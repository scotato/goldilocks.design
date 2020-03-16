import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import Layout, { Container } from '../components/Layout'
import SEO from '../components/SEO'
import ProjectHeader from '../components/ProjectHeader'
import Gallery from '../components/Gallery'
import ActivityList from '../components/ActivityList'
import ResourceList from '../components/ResourceList'
import ContentList from '../components/ContentList'
import { Back, LinkIcon } from '../components/Link'
import RepositoryIndicators from '../components/RepositoryIndicators'
 
const Project = styled(Container)``

export default ({ data: { project }, location: { pathname } }) => {
  const { badge, title, description, logo, gallery, projects, posts, tools, status, github } = project.frontmatter
  const { createdAt, committedAt, version, commits } = github
  const website = github.homepageUrl
  const githubUrl = !github.isPrivate && github.url
  const feedback = `${pathname}/feedback`

  return (
    <Layout
      title={title}
      headerPrimary={<Back to='projects'>Projects</Back>}
      headerSecondary={
        <>
          <LinkIcon to={website} icon="link" size={600} />
          <LinkIcon to={githubUrl} icon="github" size={600} />
          <LinkIcon to={feedback} icon="comment" size={600} />
        </>
      }
    >
      <SEO title={title} description={description} badge={badge.childImageSharp.fluid.src} />
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
    project: mdx(fields: { slug: { eq: $slug } }) {
      ...Project
      frontmatter {
        ...ProjectFrontmatter
        ...Collections
      }
    }
  }
`
