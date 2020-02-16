import { graphql } from 'gatsby'

export const query = graphql`
  fragment ProjectFrontmatter on MarkdownRemarkFrontmatter {
    id
    title
    description
    status
    github {
      ...Repository
    }
    npm {
      ...Package
    }
    gallery {
      description
      img {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    badge {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  fragment Project on MarkdownRemark {
    id
    fields {
      slug
    }
  }
`
