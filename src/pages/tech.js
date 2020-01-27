import React from 'react'
import moment from 'moment'
import { graphql } from 'gatsby'
import LinkRow, { Container } from '../components/LinkRow'

const TechPage = ({ data: { technology }}) => (
  <Container>
    {technology.edges.map(({node: tech}) => (
      <LinkRow
        to={tech.fields.slug}
        key={tech.fields.slug}
        badge={tech.frontmatter.badge.childImageSharp.fluid}
        title={tech.frontmatter.title}
        description={tech.frontmatter.description}
        detail={moment(tech.frontmatter.createdAt).format("MMM YYYY")}
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
            ...Tech
          }
        }
    }
  }
`
