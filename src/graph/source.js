import { graphql } from 'gatsby'

export const query = graphql`
  fragment Repository on GithubRepo {
    name
    url
    description
    createdAt
    pushedAt
    updatedAt
    committedAt
    commitAuthoredAt
    homepageUrl
    openGraphImageUrl
    usesCustomOpenGraphImage
    isPrivate
    language
    stargazers
    commits
    version
  }

  fragment Package on NPMPackage {
    url
    version
    downloadsWeekly
  }
`
