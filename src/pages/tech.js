import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import CardRow, { Container } from '../components/CardRow'
import Link from '../components/Link'
import Icon from '../components/Icon'

const Social = styled.div`
  display: flex;
`

const TechIcon = styled(Icon)`
  color: ${props => props.theme.grayscale[300]};
`

const TechLink = styled(Link)`
  margin: 0 ${props => props.theme.size[300]};
`

const Connections = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled(Img)`
  width: 100%;
`

const TechBadge = ({className, ...props}) => (
  <div className={className}>
    <Image {...props} />
  </div>
)

const TechBadgeLink = styled(Link)`
  margin-right: ${props => props.theme.size[200]};
`

const TechBadgeSmall = styled(TechBadge)`
  width: ${props => props.theme.size[700]};
  border-radius: ${props => props.theme.size[300]};
  overflow: hidden;

  .gatsby-image-wrapper {
    height: ${props => props.theme.size[700]};
  }
`

const TechIconLink = ({icon, to}) => to ? (
  <TechLink to={to}>
    <TechIcon name={icon} size={700} />
  </TechLink>
) : null

const TechPage = ({ data: { technology, projects }}) => (
  <Container>
    {technology.edges.map(({node: tech}) => {
      const connectedProjects = projects.edges
        ? projects.edges
          .filter(project => project.node && project.node.frontmatter.tech && project.node.frontmatter.tech
            .filter(item => item && item.frontmatter && item.frontmatter.id === tech.frontmatter.id).length)
        : []
      
        return (
        <CardRow
          key={tech.id}
          badge={tech.frontmatter.badge.childImageSharp.fluid}
          title={tech.frontmatter.title}
          connections={(
            <Connections>
              {connectedProjects.length > 0 && connectedProjects.map(item => (
                <TechBadgeLink to={item.node.fields.slug}>
                  <TechBadgeSmall
                    title={item.node.frontmatter.title}
                    fluid={item.node.frontmatter.badge.childImageSharp.fluid}
                  />
                </TechBadgeLink>
              ))}
            </Connections>
          )}
          detail={(
            <Social>
              <TechIconLink to={tech.frontmatter.github} icon="github" />
              <TechIconLink to={tech.frontmatter.docs} icon="book" />
              <TechIconLink to={tech.frontmatter.website} icon="external-link" />
            </Social>
          )}
        />
      )
    })}
  </Container>
)

export default TechPage

export const pageQuery = graphql`
  query {
    technology: allMarkdownRemark(
        filter: { fields: { collection: { eq: "tech" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            ...Tech
          }
        }
    }
    projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
      ) {
        edges {
          node {
            ...Project
          }
        }
    }
  }
`

export const query = graphql`
  fragment Tech on MarkdownRemark {
    fields {
      slug
      collection
    }
    frontmatter {
      id
      title
      description
      github
      docs
      website
      badge {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      date
      tech {
        fields {
          slug
          collection
        }
        frontmatter {
          id
          title
          description
          github
          docs
          website
          badge {
            childImageSharp {
              fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          date
        }
      }
    }
  }
`

