import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import { ButtonLink } from '../components/Button'
import Icon from '../components/Icon'

const Project = styled.article`
  padding: ${props => props.theme.size[400]} ${props => props.theme.size[550]};

  ${props => props.theme.media.tabletHorizontal`
    padding: ${props => `${props.theme.size[400]} ${props.theme.size[450]}`};
  `}

  ${props => props.theme.media.tabletVertical`
    padding: ${props.theme.size[450]};
  `}

  ${props => props.theme.media.phone`
    padding: ${props.theme.size[400]};
  `}
`

const Actions = styled.nav`
  display: flex;
  margin: 0 ${props => props.theme.size[550]};
  flex-direction: row;

  ${props => props.theme.media.tabletHorizontal`
    margin: 0 ${props => props.theme.size[450]};
  `}

  ${props => props.theme.media.tabletVertical`
    margin: 0 ${props => props.theme.size[450]};
  `}

  ${props => props.theme.media.phone`    
    margin: 0;
    flex-direction: column;
    padding: 0 ${props.theme.size[400]};
  `}
`

const ActionButton = styled(ButtonLink)`
  margin: ${props => props.theme.size[200]};
  padding: ${props => props.theme.size[200]};
  color: ${props => props.theme.colors.black[100]};
  background-color: ${props => props.theme.colors[props.color][props.colorWeight || 500]};
  text-transform: uppercase;
  font-weight: 900;
  flex-grow: 1;

  &:hover {
    color: ${props => props.theme.colors.black[100]};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ${props => props.theme.media.phone`    
    &:first-child {
      margin-left: ${props => props.theme.size[200]};
    }

    &:last-child {
      margin-right: ${props => props.theme.size[200]};
    }
  `}
`

const ActionIcon = styled(Icon)`
  margin: 0 auto;
`

const Action = ({icon, ...props}) => (
  <ActionButton {...props}>
    <ActionIcon name={icon} />
  </ActionButton>
)

export default ({ data }) => {
  const project = data.project.frontmatter
  const {
    title,
    twitter,
    github,
    website,
    isSourcePublic,
    isWebsiteActive
  } = project

  return (
    <>
      <Project dangerouslySetInnerHTML={{ __html: data.project.html }} />
      <Actions>
        {website && isWebsiteActive && (
          <Action
            to={website}
            icon="fa-pencil-ruler"
            color="blue"
            title={title}
            rel="next"
          />
        )}

        {github && isSourcePublic && (
          <Action
            to={github}
            icon="fa-github"
            color="black"
            colorWeight={900}
            title="Project Source on Github"
            rel="next"
          />
        )}

        {twitter && (
          <Action
            to={`https://twitter.com/scotato/status/${twitter}`}
            icon="fa-comment"
            color="green"
            title="Feedback on Twitter"
            rel="twitter"
          />
        )}
      </Actions>
    </>
  )
} 

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    page: appsYaml(id: { eq: "projects" }) {
      ...AppInfo
    }
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        collection
      }
      frontmatter {
        author
        title
        date
        intro
        twitter
        github
        website
        isProjectActive
        isSourcePublic
        isWebsiteActive
      }
    }
    # github: github {
    #   repository(name: "goldilocks.design", owner: "scotato") {
    #     name
    #     description
    #     createdAt
    #     pushedAt
    #   }
    # }
  }
`