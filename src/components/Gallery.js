import React from 'react'
import styled, { css } from 'styled-components'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const deviceDimensions = css`
  width: ${props => props.theme.size[850]};
`

const deviceOverlayElement = css`
  position: absolute;
  display: block;
  margin: 0 auto;
  width: 50%;
  left: 25%;
  content: " ";
  height: 8px;
  background-color: ${props => props.theme.colors.black.darkest};
  /* border-radius: 8px; */
  pointer-events: none;
  z-index: 100;
`

const Device = styled.div`
  position: relative;
  margin: ${props => props.theme.size[200]} auto ${props => props.theme.size[450]};
  background-color: ${props => props.theme.colors.black[200]};
  border-radius: ${props => props.theme.size[350]};
  border: 8px solid ${props => props.theme.colors.black[200]};
  box-sizing: content-box;
  /* box-shadow: 0px 4px 4px rgba(0,0,0,0.125); */
  ${deviceDimensions}

  &:before {
    ${deviceOverlayElement}
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    top: 0;
  }

  ${props => props.theme.media.phone`
    margin-top: 0;
  `}

  .slick-list {
    border-radius: ${props => props.theme.size[300]};
    overflow: hidden;
  }

  .slick-slide > div {
    display: flex;
  }

  .slick-dots {
    bottom: -48px;
    
    li,
    li.slick-active {
      button:before {
        color: ${props => props.theme.colors.black.darker};
        font-size: 12px;
        transition: color .2s ease-out, opacity .2s ease-out;
      }

      button:focus:before {
        color: ${props => props.theme.colors.black.darker};
      }
    }

    li button:focus:before {
      color: ${props => props.theme.colors.black.lighter};
    }
  }
`

const Image = styled(Img)`
  ${deviceDimensions}
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