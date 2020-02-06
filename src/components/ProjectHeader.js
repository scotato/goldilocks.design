import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Header = styled.div`
  display: grid;
  margin-bottom: ${props => props.theme.size[900]};
  grid-template-columns: ${props => props.theme.size[900]} auto;
  grid-template-rows: ${props => props.theme.size[700]} auto auto;
  grid-column-gap: ${props => props.theme.size[500]};
  grid-row-gap: ${props => props.theme.size[200]};
  grid-template-areas:
    "badge title"
    "badge description"
    "badge indicators";
`

const Image = styled(Img)`
  width: 100%;
`

const Title = styled.h1`
  margin: 0;
  font-size: ${props => props.theme.size[700]};
  grid-area: title;
`

const Description = styled.p`
  margin: 0;
  grid-area: description;
`

const Indicators = styled.span`
  margin: 0;
  grid-area: indicators;
`

const Badge = ({className, ...props}) => (
  <div className={className}>
    <Image {...props} />
  </div>
)

const BadgeLarge = styled(Badge)`
  width: ${props => props.theme.size[900]};
  grid-area: badge;

  .gatsby-image-wrapper {
    height: ${props => props.theme.size[900]};
    border-radius: ${props => props.theme.size[300]};
    overflow: hidden;
  }
`

export default props => (
  <Header>
    <BadgeLarge
      title={props.title}
      fluid={props.badge}
    />
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
    <Indicators>{props.indicators}</Indicators>
  </Header>
)
