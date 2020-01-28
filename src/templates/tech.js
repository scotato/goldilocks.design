import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Link from '../components/Link'
import Icon from '../components/Icon'

const Tech = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: ${props => props.theme.size[500]};
  width: ${props => props.theme.size[850]};
  align-items: center;
`

const Social = styled.div`
  display: flex;
`

// const Connections = styled.div`
//   display: flex;
//   align-items: center;
// `

// const TechBadgeLink = styled(Link)`
//   margin-right: ${props => props.theme.size[200]};
// `

const TechIcon = styled(Icon)`
  color: ${props => props.theme.grayscale[300]};
`

const TechLink = styled(Link)`
  margin: 0 ${props => props.theme.size[300]};
`

const TechLinks = styled.div`
  display: flex;
  align-items: center;
`

const TechIconLink = ({icon, to}) => to ? (
  <TechLink to={to}>
    <TechIcon name={icon} />
  </TechLink>
) : null

const Image = styled(Img)`
  width: 100%;
`

const TechHeader = styled.header`
  display: flex;
`

const TechHeaderTitle = styled.h1``

const TechBadge = ({className, ...props}) => (
  <div className={className}>
    <Image {...props} />
  </div>
)

const TechBadgeSmall = styled(TechBadge)`
  width: ${props => props.theme.size[700]};
  border-radius: ${props => props.theme.size[300]};
  overflow: hidden;

  .gatsby-image-wrapper {
    height: ${props => props.theme.size[700]};
  }
`

/* <Connections>
  {connectedProjects.length > 0 && connectedProjects.map(item => (
    <TechBadgeLink to={item.node.fields.slug}>
      <TechBadgeSmall
        title={item.node.frontmatter.title}
        fluid={item.node.frontmatter.badge.childImageSharp.fluid}
      />
    </TechBadgeLink>
  ))}
</Connections> */

const TechPage = ({ data: { tech }}) => (
  <Tech>
    <TechBadge
      title={tech.frontmatter.title}
      fluid={tech.frontmatter.badge.childImageSharp.fluid}
    />
    <div>
      <TechHeader>
        <TechHeaderTitle>{tech.frontmatter.title}</TechHeaderTitle>
        <Social>
          <TechIconLink to={tech.frontmatter.github} icon="github" />
          <TechIconLink to={tech.frontmatter.docs} icon="book" />
          <TechIconLink to={tech.frontmatter.website} icon="external-link" />
        </Social>
      </TechHeader>
      <p>{tech.frontmatter.description}</p>
      <TechLinks>
        {tech.frontmatter.tech && tech.frontmatter.tech.map(item => (
          <Link to={item.fields.slug}>
            <TechBadgeSmall
              title={item.frontmatter.title}
              fluid={item.frontmatter.badge.childImageSharp.fluid}
            />
          </Link>
        ))}
      </TechLinks>
    </div>
  </Tech>
)

export default TechPage

export const pageQuery = graphql`
  query TechBySlug($slug: String!) {
    tech: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Tech
    }
  }
`