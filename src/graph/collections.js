import { graphql } from 'gatsby'

export const query = graphql`
  fragment Collections on MdxFrontmatter {
    projects {
      ...Project
      frontmatter {
        ...ProjectFrontmatter
      }
    }
    posts {
      ...Post
      frontmatter {
        ...PostFrontmatter
      }
    }
    tools {
      ...Tool
      frontmatter {
        ...ToolFrontmatter
      }
    }
  }
`
