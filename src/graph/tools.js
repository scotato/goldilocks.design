import { graphql } from 'gatsby'

export const query = graphql`
  fragment ToolFrontmatter on MdxFrontmatter {
    id
    title
    description
    docs
    website
    version
    category
    github {
      ...Repository
    }
    npm {
      ...Package
    }
    badge {
      childImageSharp {
        fluid(maxWidth: 128) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }

  fragment Tool on Mdx {
    id
    fields {
      slug
      collection
    }
  }
`
