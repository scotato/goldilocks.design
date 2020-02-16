import { graphql } from 'gatsby'

export const query = graphql`
  fragment Collections on MarkdownRemarkFrontmatter {
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
