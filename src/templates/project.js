import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import Gallery from '../components/Gallery'

const Project = styled.article`
  padding: ${props => props.theme.size[900]};
`

export default ({ data }) => {
  const project = data.project.frontmatter
  const {
    // title,
    galleryIsPhone,
    gallery,
    // twitter,
    // github,
    // website,
    // isSourcePublic,
    // isWebsiteActive
  } = project

  return (
    <>
      {gallery && <Gallery images={gallery} isPhone={galleryIsPhone} />}
      <Project dangerouslySetInnerHTML={{ __html: data.project.html }} />
    </>
  )
} 

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        collection
      }
      frontmatter {
        author
        title
        galleryIsPhone
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
        date
        intro
        twitter
        github
        website
        isProjectActive
        isSourcePublic
        isWebsiteActive
        tech {
          ...Tech
        }
      }
    }
  }
`