import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../components/Header'
import ContentList from '../components/ContentList'
import { Back, LinkIcon } from '../components/Link'

const Tool = styled.div`
  margin: 0 ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[900]};
`

const ToolHeader = styled.div`
  display: grid;
  margin-bottom: ${props => props.theme.size[900]};
  grid-template-columns: ${props => props.theme.size[900]} auto;
  grid-template-rows: ${props => props.theme.size[700]} auto;
  grid-column-gap: ${props => props.theme.size[500]};
  grid-row-gap: ${props => props.theme.size[200]};
  grid-template-areas:
    "badge title"
    "badge description";
`

const Image = styled(Img)`
  width: 100%;
`

const ToolTitle = styled.h1`
  margin: 0;
  font-size: ${props => props.theme.size[700]};
  grid-area: title;
`

const ToolDescription = styled.p`
  margin: 0;
  grid-area: description;
`

const ToolBadge = ({className, ...props}) => (
  <div className={className}>
    <Image {...props} />
  </div>
)

const ToolBadgeLarge = styled(ToolBadge)`
  width: ${props => props.theme.size[900]};
  grid-area: badge;

  .gatsby-image-wrapper {
    height: ${props => props.theme.size[900]};
    border-radius: ${props => props.theme.size[300]};
    overflow: hidden;
  }
`

const ToolPage = ({ data: { tool } }) => (
  <>
    <Header
      title={tool.frontmatter.title}
      primary={<Back to='tools'>Tools</Back>}
      secondary={[
        <LinkIcon to={tool.frontmatter.github} icon="github" size={600} />,
        <LinkIcon to={tool.frontmatter.docs} icon="book" size={600} />,
        <LinkIcon to={tool.frontmatter.website} icon="external-link" size={600} />
      ]}
    />
    <Tool>
      <ToolHeader>
        <ToolBadgeLarge
          title={tool.frontmatter.title}
          fluid={tool.frontmatter.badge.childImageSharp.fluid}
        />
        <ToolTitle>{tool.frontmatter.title}</ToolTitle>
        <ToolDescription>{tool.frontmatter.description}</ToolDescription>
      </ToolHeader>
      
      <ContentList
        projects={tool.frontmatter.projects || []}
        posts={tool.frontmatter.posts || []}
        tools={tool.frontmatter.tools || []}
      />
    </Tool>
  </>
)

export default ToolPage

export const pageQuery = graphql`
  query ToolBySlug($slug: String!) {
    tool: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Tool
    }
  }
`