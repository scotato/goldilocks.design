import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout, { Container } from '../components/Layout'
import SEO from '../components/SEO'
import ProjectHeader from '../components/ProjectHeader'
import ActivityList from '../components/ActivityList'
import ResourceList from '../components/ResourceList'
import ContentList from '../components/ContentList'
import RepositoryIndicators from '../components/RepositoryIndicators'
import { Back, LinkIcon } from '../components/Link'

const Tool = styled(Container)``

const ToolPage = ({ data: { tool } }) => {
  const { title, description, docs, website, github, npm, badge, projects, posts, tools } = tool.frontmatter
  const version = npm ? npm.version : github && github.version

  return (
    <Layout
      title={title}
      headerPrimary={<Back to='tools'>Tools</Back>}
      headerSecondary={
        <>
          <LinkIcon to={website} icon="link" />
          <LinkIcon to={github && github.url} icon="github" />
          <LinkIcon to={docs} icon="book" />
        </>
      }
    >
      <SEO title={title} description={description} />
      <Tool>
        <ProjectHeader
          title={title}
          description={description}
          badge={badge.childImageSharp.fluid}
          indicators={
            <RepositoryIndicators
              stargazers={github && github.stargazers}
              downloads={npm && npm.downloadsWeekly}
              version={version}
            />
          }
        />

        <ResourceList
          website={website}
          github={github && github.url}
          docs={docs}
        />

        <ActivityList
          createdAt={github && github.createdAt}
          updatedAt={github && github.updatedAt}
          stargazers={github && github.stargazers}
          downloads={npm && npm.downloadsWeekly}
          commits={github && github.commits}
          version={version}
        />
  
        <ContentList
          projects={projects}
          posts={posts}
          tools={tools}
        />
      </Tool>
    </Layout>
  )
}

export default ToolPage

export const pageQuery = graphql`
  query ToolBySlug($slug: String!) {
    tool: mdx(fields: { slug: { eq: $slug } }) {
      ...Tool
      frontmatter {
        ...ToolFrontmatter
        ...Collections
      }
    }
  }
`