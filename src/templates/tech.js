import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../components/Header'
import { Back, LinkIcon } from '../components/Link'

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

const TechPage = ({ data: { tech } }) => (
  <>
    <Header
      title={tech.frontmatter.title}
      primary={<Back to='tech'>Tech</Back>}
      secondary={[
        <LinkIcon to={tech.frontmatter.github} icon="github" size={600} />,
        <LinkIcon to={tech.frontmatter.docs} icon="book" size={600} />,
        <LinkIcon to={tech.frontmatter.website} icon="external-link" size={600} />
      ]}
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