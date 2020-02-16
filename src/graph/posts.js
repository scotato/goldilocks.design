import { graphql } from 'gatsby'

export const query = graphql`
  fragment PostFrontmatter on MarkdownRemarkFrontmatter {
    id
    author
    title
    createdAt
    updatedAt
    badge {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  fragment Post on MarkdownRemark {
    id
    fields {
      slug
    }
    excerpt
    timeToRead
    html
  }
`
