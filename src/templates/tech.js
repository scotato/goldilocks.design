import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../components/Header'
import Link from '../components/Link'
import Icon from '../components/Icon'

const Tech = styled.div`
  margin: 0 ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[900]};
`

const TechHeader = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.size[900]} auto;
  grid-template-rows: ${props => props.theme.size[700]} auto;
  grid-column-gap: ${props => props.theme.size[500]};
  grid-row-gap: ${props => props.theme.size[200]};
  grid-template-areas:
    "badge title"
    "badge description";
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
  /* color: ${props => props.theme.grayscale[500]}; */
`

const TechLink = styled(Link)`
  margin: 0 ${props => props.theme.size[300]};
`

// const TechLinks = styled.div`
//   display: flex;
//   align-items: center;
// `

const TechIconLink = ({icon, to}) => to ? (
  <TechLink to={to}>
    <TechIcon name={icon} size={600} />
  </TechLink>
) : null

const Image = styled(Img)`
  width: 100%;
`

const TechTitle = styled.h1`
  margin: 0;
  font-size: ${props => props.theme.size[700]};
  grid-area: title;
`

const TechDescription = styled.p`
  margin: 0;
  grid-area: description;
`

const TechBadge = ({className, ...props}) => (
  <div className={className}>
    <Image {...props} />
  </div>
)

const TechBadgeLarge = styled(TechBadge)`
  width: ${props => props.theme.size[900]};
  grid-area: badge;

  .gatsby-image-wrapper {
    height: ${props => props.theme.size[900]};
    border-radius: ${props => props.theme.size[300]};
    overflow: hidden;
  }
`

// const TechBadgeSmall = styled(TechBadge)`
//   width: ${props => props.theme.size[700]};
//   border-radius: ${props => props.theme.size[300]};
//   overflow: hidden;

//   .gatsby-image-wrapper {
//     height: ${props => props.theme.size[700]};
//   }
// `

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

const TechPage = ({ data: { tech }, ...props }) => (
  <>
    <Header
      title={tech.frontmatter.title}
      actions={
        <Social>
          <TechIconLink to={tech.frontmatter.github} icon="github" />
          <TechIconLink to={tech.frontmatter.docs} icon="book" />
          <TechIconLink to={tech.frontmatter.website} icon="external-link" />
        </Social>
      }
      {...props}
    />
    <Tech>
      <TechHeader>
        <TechBadgeLarge
          title={tech.frontmatter.title}
          fluid={tech.frontmatter.badge.childImageSharp.fluid}
        />
        <TechTitle>{tech.frontmatter.title}</TechTitle>
        <TechDescription>{tech.frontmatter.description}</TechDescription>
      </TechHeader>

      {/* <TechLinks>
        {tech.frontmatter.tech && tech.frontmatter.tech.map(item => (
          <Link to={item.fields.slug}>
            <TechBadgeSmall
              title={item.frontmatter.title}
              fluid={item.frontmatter.badge.childImageSharp.fluid}
            />
          </Link>
        ))}
      </TechLinks> */}
    </Tech>
  </>
)

export default TechPage

export const pageQuery = graphql`
  query TechBySlug($slug: String!) {
    tech: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Tech
    }
  }
`