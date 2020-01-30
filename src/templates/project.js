import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
 
import Header from '../components/Header'
import Gallery from '../components/Gallery'
 
const Project = styled.article`
  margin: 0 ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[900]};
`

export default ({ data }, ...props) => {
  const project = data.project.frontmatter

  return (
    <>
      <Header title={project.title} {...props} />
      <Project>
        {project.gallery && <Gallery images={project.gallery} />}
        <div dangerouslySetInnerHTML={{ __html: data.project.html }} />
      </Project>
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