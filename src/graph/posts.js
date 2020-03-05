import { graphql } from 'gatsby'

export const query = graphql`
  fragment PostFrontmatter on MarkdownRemarkFrontmatter {
    id
    author
    title
    description
    website
    githubUrl
    createdAt
    updatedAt
    authorImg {
      childImageSharp {
        fluid(maxWidth: 128) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    badge {
      childImageSharp {
        fluid(maxWidth: 1280) {
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
