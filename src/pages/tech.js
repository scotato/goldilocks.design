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

const ConnectionIcon = styled(Icon)`
  margin-right: ${props => props.theme.size[300]};
  color: ${props => props.theme.grayscale[300]};
`

const TechLink = styled(Link)`
  margin: 0 ${props => props.theme.size[300]};
`

const TechLinks = styled.div`
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

const TechBadgeSmall = styled(TechBadge)`
  margin-right: ${props => props.theme.size[200]};
  width: ${props => props.theme.size[600]};
`

const TechIconLink = ({icon, to}) => to ? (
  <TechLink to={to}>
    <TechIcon name={icon} size={700} />
  </TechLink>
) : null

const TechPage = ({ data: { technology, posts, projects }}) => (
  <Container>
    {console.log(posts, projects)}
    {technology.edges.map(({node: tech}) => (
      <CardRow
        key={tech.id}
        badge={tech.frontmatter.badge.childImageSharp.fluid}
        title={tech.frontmatter.title}
        connections={(
          <TechLinks>
            {tech.frontmatter.tech && tech.frontmatter.tech.length && <ConnectionIcon name='window' size={600} />}
            {tech.frontmatter.tech && tech.frontmatter.tech.map(item => (
              <TechBadgeSmall
                title={item.frontmatter.title}
                fluid={item.frontmatter.badge.childImageSharp.fluid}
              />
            ))}
          </TechLinks>
        )}
        detail={(
          <Social>
            <TechIconLink to={tech.frontmatter.github} icon="github" />
            <TechIconLink to={tech.frontmatter.docs} icon="book" />
            <TechIconLink to={tech.frontmatter.website} icon="external-link" />
          </Social>
        )}
      />
    ))}
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
    posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        edges {
          node {
            ...Post
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

