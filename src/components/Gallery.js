import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Img from 'gatsby-image'

const Device = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: ${props => props.theme.size[900]};
  padding-bottom: ${props => props.theme.size[700]};
  box-sizing: content-box;
  width: 713px;

  .slick-slide {
    padding: 0 ${props => props.theme.size[400]};
  }

  .slick-slide > div {
    display: flex;
    border-radius: ${props => props.theme.size[500]};
    border: ${props => props.theme.size[200]} solid ${props => props.theme.isDarkMode ? props.theme.grayscale[800] : props.theme.grayscale[200]};
    overflow: hidden;
  }

  .slick-dots {
    bottom: -${props => props.theme.size[800]};
    
    li,
    li.slick-active {
      button:before {
        color: ${props => props.theme.isDarkMode ? props.theme.grayscale[300] : props.theme.grayscale[700]};
        font-size: ${props => props.theme.size[400]};
        transition: color .2s ease-out, opacity .2s ease-out;
      }

      button:focus:before {
        color: ${props => props.theme.isDarkMode ? props.theme.grayscale[300] : props.theme.grayscale[700]};
      }
    }

    li button:focus:before {
      color: ${props => props.theme.isDarkMode ? props.theme.grayscale[700] : props.theme.grayscale[300]};
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
      speed={500}
      slidesToShow={2}
      slidesToScroll={1}
    >
      {children}
    </Slider>
  </Device>
)

export default ({images = [], ...props}) => (
  <Gallery {...props}>
    {images.map((screenshot, i) => (
      <a key={i} href={screenshot.img.childImageSharp.fluid.src} target="_blank">
        <Image
          fluid={screenshot.img.childImageSharp.fluid}
          alt={screenshot.description}
        />
      </a>
    ))}
  </Gallery>
)
