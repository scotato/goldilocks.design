import React from 'react'
import styled, { css } from 'styled-components'

const Banner = styled.section`
  position: relative;
  display: flex;
  margin: 0;
  width: 100vw;
  padding: 0 25vw;
  height: 80vh;
  background-color: ${props => props.theme.colors.primary};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props => props.type === 'post' && css`
    padding: 0 20vw;
  `}
`

const BannerTitle = styled.h1`
  font-size: 20vh;
  font-weight: 800;
  text-align: center;
  line-height: 1;
  user-select: none;
  letter-spacing: -0.025em;

  ${props => props.type === 'post' && css`
    font-size: 15vh;
    line-height: 0.95;
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
