import React from 'react'
import styled, { css } from 'styled-components'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Device = styled.div`
  position: relative;
  margin: auto;
  margin-bottom:  ${props => props.theme.size[900]};
  background-color: ${props => props.theme.grayscale[200]};
  box-sizing: content-box;
  width: 905px;

  .slick-list {
  }

  .slick-slide > div {
    display: flex;
  }

  .slick-dots {
    bottom: -${props => props.theme.size[450]};

    ${props => props.theme.media.tabletHorizontal`
      bottom: -${props => props.theme.size[500]};
    `}

    ${props => props.theme.media.phone`
      bottom: -${props => props.theme.size[550]};
    `}
    
    li,
    li.slick-active {
      button:before {
        color: ${props => props.theme.grayscale.darker};
        font-size: ${props => props.theme.size[300]};
        transition: color .2s ease-out, opacity .2s ease-out;

        ${props => props.theme.media.tabletHorizontal`
          font-size: ${props => props.theme.size[300]};
        `}

        ${props => props.theme.media.phone`
          font-size: ${props => props.theme.size[400]};
        `}
      }

      button:focus:before {
        color: ${props => props.theme.grayscale.darker};
      }
    }

    li button:focus:before {
      color: ${props => props.theme.grayscale.lighter};
    }
  }
`

const Image = styled(Img)`
  width: 100%;
`

export const Gallery = ({ children, ...props}) => (
  <Device {...props}>
    <Slider
      dots={true}
      arrows={false}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {children}
    </Slider>
  </Device>
)

export default ({images = [], ...props}) => (
  <Gallery {...props}>
    {images.map((screenshot, i) => (
      <Image
        key={i}
        fluid={screenshot.img.childImageSharp.fluid}
        alt={screenshot.description}
      />
    ))}
  </Gallery>
)
