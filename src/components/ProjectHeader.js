import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ToolHeader = styled.div`
  display: grid;
  margin-bottom: ${props => props.theme.size[900]};
  grid-template-columns: ${props => props.theme.size[900]} auto;
  grid-template-rows: ${props => props.theme.size[700]} auto;
  grid-column-gap: ${props => props.theme.size[500]};
  grid-row-gap: ${props => props.theme.size[200]};
  grid-template-areas:
    "badge title"
    "badge description";
`

const Image = styled(Img)`
  width: 100%;
`

const ToolTitle = styled.h1`
  margin: 0;
  font-size: ${props => props.theme.size[700]};
  grid-area: title;
`

const ToolDescription = styled.p`
  margin: 0;
  grid-area: description;
`

const ToolBadge = ({className, ...props}) => (
  <div className={className}>
    <Image {...props} />
  </div>
)

const ToolBadgeLarge = styled(ToolBadge)`
  width: ${props => props.theme.size[900]};
  grid-area: badge;

  .gatsby-image-wrapper {
    height: ${props => props.theme.size[900]};
    border-radius: ${props => props.theme.size[300]};
    overflow: hidden;
  }
`

export default props => (
  <ToolHeader>
    <ToolBadgeLarge
      title={props.title}
      fluid={props.badge}
    />
    <ToolTitle>{props.title}</ToolTitle>
    <ToolDescription>{props.description}</ToolDescription>
  </ToolHeader>
)
