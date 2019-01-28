import React from 'react'
import styled, { css } from 'styled-components'

const Banner = styled.section`
  position: relative;
  display: flex;
  margin: 0;
  width: 100vw;
  padding: 0 12.5vw;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props => props.type === 'post' && css`
    padding: 0 20vw;
  `}
`

const BannerTitle = styled.h1`
  margin: 0;
  font-weight: 800;
  text-align: center;
  line-height: 1;
  user-select: none;
  letter-spacing: -0.025em;
  font-size: 20vh;
  color: ${props => props.theme.colors.black[900]};

  ${props => props.type === 'post' && css`
    font-size: 15vh;    
    line-height: 0.9;
    letter-spacing: -0.0125em;
  `}
`

export default ({ type, title, children, ...props }) => (
  <Banner type={type} {...props}>
    <BannerTitle type={type}>
      {title}
    </BannerTitle>
    {children}
  </Banner>
)
