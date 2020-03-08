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
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    badge {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo {
      childImageSharp {
        fluid(maxWidth: 128, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
