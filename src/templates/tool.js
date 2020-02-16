import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ProjectHeader from '../components/ProjectHeader'
import RepositoryRows from '../components/RepositoryRows'
import RepositoryIndicators from '../components/RepositoryIndicators'
import ContentList from '../components/ContentList'
import { Back, LinkIcon } from '../components/Link'

const Tool = styled.div`
  margin: 0 ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[900]};

  ${props => props.theme.media.tabletHorizontal`
    margin: 0 ${props => props.theme.size[700]};
    padding: ${props => props.theme.size[700]};
  `}

  ${props => props.theme.media.phone`
    margin: 0;
    padding: ${props => props.theme.size[500]};
  `}
`

const ToolPage = ({ data: { tool } }) => {
  const { title, description, docs, website, github, npm, badge, projects, posts, tools } = tool.frontmatter
  const version = npm ? npm.version : github && github.version

  return (
    <Layout>
      <Header
        title={title}
        primary={<Back to='tools'>Tools</Back>}
        secondary={[
          <LinkIcon to={github && github.url} icon="github" size={600} />,
          <LinkIcon to={docs} icon="book" size={600} />,
          <LinkIcon to={website} icon="external-link" size={600} />
        ]}
      />
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
  
        <ContentList
          projects={projects}
          posts={posts}
          tools={tools}
        />
  
        <RepositoryRows
          createdAt={github && github.createdAt}
          updatedAt={github && github.updatedAt}
          stargazers={github && github.stargazers}
          downloads={npm && npm.downloadsWeekly}
          commits={github && github.commits}
          version={version}
        />
      </Tool>
    </Layout>
  )
}

export default ToolPage

export const pageQuery = graphql`
  query ToolBySlug($slug: String!) {
    tool: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Tool
      frontmatter {
        ...ToolFrontmatter
        ...Collections
      }
    }
  }
`