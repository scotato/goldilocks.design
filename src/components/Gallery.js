import React from 'react'
import styled, { css } from 'styled-components'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Device = styled.div`
  position: relative;
  margin: auto;
  margin-bottom:  ${props => props.theme.size[550]};
  border-radius: ${props => props.theme.size[350]};
  background-color: ${props => props.theme.colors.black[200]};
  border: ${props => props.theme.size[200]} solid ${props => props.theme.colors.black[200]};
  box-sizing: content-box;
  ${props => props.isPhone ? css`
    width: ${props => props.theme.size[750]};
  ` : css`
    width: Calc(${props => props.theme.size[850]} + ${props => props.theme.size[600]});
  `}

  ${props => props.theme.media.tabletHorizontal`
    margin-bottom:  ${props => props.theme.size[600]};
    
    ${props => props.isPhone ? css`
      width: ${props => props.theme.size[750]};
    ` : css`
      width: ${props => props.theme.size[900]};
    `}
  `}

${props => props.theme.media.tabletVertical`
    margin-bottom:  ${props => props.theme.size[600]};
    
    ${props => props.isPhone ? css`
      width: ${props => props.theme.size[800]};
    ` : css`
      width: ${props => props.theme.size[900]};
    `}
  `}

  ${props => props.theme.media.phone`
    margin-bottom:  ${props => props.theme.size[650]};
    width: ${props => props.theme.size[900]};
    border-radius: ${props => props.theme.size[450]};
  `}

  .slick-list {
    border-radius: ${props => props.theme.size[300]};
    overflow: hidden;

    ${props => props.theme.media.phone`
      border-radius: ${props => props.theme.size[450]};
    `}
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
        color: ${props => props.theme.colors.black.darker};
        font-size: ${props => props.theme.size[250]};
        transition: color .2s ease-out, opacity .2s ease-out;

        ${props => props.theme.media.tabletHorizontal`
          font-size: ${props => props.theme.size[300]};
        `}

        ${props => props.theme.media.phone`
          font-size: ${props => props.theme.size[400]};
        `}
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
