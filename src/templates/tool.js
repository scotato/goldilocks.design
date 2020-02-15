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
    padding: ${props => props.theme.size[500]} ${props => props.theme.size[700]};
  `}

  ${props => props.theme.media.phone`
    margin: 0;
    padding: ${props => props.theme.size[500]};
  `}
`

const ToolPage = ({ data: { tool } }) => (
  <Layout>
    {console.log(tool.frontmatter)}
    <Header
      title={tool.frontmatter.title}
      primary={<Back to='tools'>Tools</Back>}
      secondary={[
        <LinkIcon to={tool.frontmatter.github && tool.frontmatter.github.url} icon="github" size={600} />,
        <LinkIcon to={tool.frontmatter.docs} icon="book" size={600} />,
        <LinkIcon to={tool.frontmatter.website} icon="external-link" size={600} />
      ]}
    />
    <Tool>
      <ProjectHeader
        title={tool.frontmatter.title}
        description={tool.frontmatter.description}
        badge={tool.frontmatter.badge.childImageSharp.fluid}
        indicators={
          <RepositoryIndicators
            stargazers={tool.frontmatter.github && tool.frontmatter.github.stargazers}
            commits={tool.frontmatter.github && tool.frontmatter.github.commits}
            version={tool.frontmatter.github && tool.frontmatter.github.version}
          />
        }
      />

      <ContentList
        title={tool.frontmatter.title}
        projects={tool.frontmatter.projects || []}
        posts={tool.frontmatter.posts || []}
        tools={tool.frontmatter.tools || []}
      />

      <RepositoryRows
        createdAt={tool.frontmatter.github && tool.frontmatter.github.createdAt}
        updatedAt={tool.frontmatter.github && tool.frontmatter.github.updatedAt}
        stargazers={tool.frontmatter.github && tool.frontmatter.github.stargazers}
        commits={tool.frontmatter.github && tool.frontmatter.github.commits}
        version={tool.frontmatter.github && tool.frontmatter.github.version}
      />
    </Tool>
  </Layout>
)

export default ToolPage

export const pageQuery = graphql`
  query ToolBySlug($slug: String!) {
    tool: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Tool
    }
  }
`