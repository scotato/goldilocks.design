import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
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

const TechIconLink = ({icon, to}) => to ? (
  <TechLink to={to}>
    <TechIcon name={icon} size={700} />
  </TechLink>
) : null

const TechPage = ({ data: { technology }}) => (
  <Container>
    {technology.edges.map(({node: tech}) => (
      <CardRow
        key={tech.id}
        badge={tech.frontmatter.badge.childImageSharp.fluid}
        title={tech.frontmatter.title}
        description={tech.frontmatter.description}
        detail={(
          <Social>
            <TechIconLink to={tech.frontmatter.url} icon="window" />
            <TechIconLink to={tech.frontmatter.urlApi} icon="typewriter" />
            <TechIconLink to={tech.frontmatter.urlSource} icon="github" />
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
  }
`
