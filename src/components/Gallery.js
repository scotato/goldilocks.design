import React from 'react'
import styled from 'styled-components'
import Flickity from 'react-flickity-component'
import Img from 'gatsby-image'

export const Slider = styled(Flickity)`
  position: relative;
  margin: 0;
  margin-bottom: ${props => props.theme.size[600]};
  width: 100%;

  &:focus {
    outline: none;
  }

  .flickity-button {
    display: none;
  }

  .flickity-slider > * {
    width: 100%;
    margin-right: ${props => props.theme.size[900]};
    margin-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  .flickity-page-dots {
    display: flex;
    margin: ${props => props.theme.size[400]} 0; 
    padding: 0;
    justify-content: center;
    list-style-type: none;

    li {
      margin: ${props => props.theme.size[400]}; 
      background-color: ${props => props.theme.grayscale[300]};
      width: ${props => props.theme.size[400]};
      height: ${props => props.theme.size[400]};
      border-radius: ${props => props.theme.size[400]};
      transition: background-color .2s ease-out, opacity .2s ease-out;
      cursor: pointer;

      &.is-selected {
        background-color: ${props => props.theme.grayscale[700]};
      
        .dark-mode & {
          background-color: ${props => props.theme.grayscale[300]};
        }
      }

      .dark-mode & {
        background-color: ${props => props.theme.grayscale[700]};
      }
    }
  }
`

const Image = styled(Img)`
  border-radius: ${props => props.theme.size[600]};
  box-shadow: 0 ${props => props.theme.size[200]} ${props => props.theme.size[300]} ${props => props.theme.grayscale[200]};
  overflow: hidden;

  .dark-mode & {
    box-shadow: 0 ${props => props.theme.size[200]} ${props => props.theme.size[300]} transparent;
  }
`

export default ({images = [], ...props}) => (
  <Slider {...props}>
    {images.map((screenshot, i) => (
      <a
        key={i}
        href={screenshot.img.childImageSharp.fluid.src}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          fluid={screenshot.img.childImageSharp.fluid}
          alt={screenshot.description}
        />
      </a>
    ))}
  </Slider>
)
