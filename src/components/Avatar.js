import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Avatar = styled(Img).attrs({
  width: '100%',
  height: '100%'
})`
  z-index: 0;
  border-radius: 50%;
  overflow: hidden;
`

export default props => {
  const { avatar } = useStaticQuery(graphql`
    query AvatarQuery {
      avatar: file(absolutePath: { regex: "/avatar-scotato.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return <Avatar fluid={avatar.childImageSharp.fluid} />
}