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

const TechLink = styled(Link)`
  margin-right: ${props => props.theme.size[100]};
`

const TechLinks = styled.div`
  display: flex;
  align-items: center;
`

const TechIcon = styled(Icon)`
  width: ${props => props.theme.size[400]};
  color: ${props => props.theme.colors.black[500]};
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

const TechHeaderLinks = styled.div`
  margin-left: ${props => props.theme.size[250]};
`

const TechBadge = ({className, ...props}) => (
  <div className={className}>
    <Image {...props} />
  </div>
)

const TechBadgeSmall = styled(TechBadge)`
  margin-right: ${props => props.theme.size[250]};
  width: ${props => props.theme.size[400]};
`

const TechPage = ({ data: { tech }}) => (
  <Tech>
    <TechBadge
      title={tech.frontmatter.title}
      fluid={tech.frontmatter.badge.childImageSharp.fluid}
    />
    <div>
      <TechHeader>
        <TechHeaderTitle>{tech.frontmatter.title}</TechHeaderTitle>
        <TechHeaderLinks>
          <TechIconLink to={tech.frontmatter.url} icon="fa-link" />
          <TechIconLink to={tech.frontmatter.urlSource} icon="fa-github" />
          <TechIconLink to={tech.frontmatter.urlApi} icon="api" />
        </TechHeaderLinks>
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
    page: appsYaml(id: { eq: "tech" }) {
      ...AppInfo
    }
    tech: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Tech
    }
  }
`
