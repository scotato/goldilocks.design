import React from 'react'
import styled from 'styled-components'

import Message from './Message'
import { BlobAnimated } from './Blob'

const Banner = styled.section`
  position: relative;
  display: grid;
  margin-bottom: -${props => props.theme.size.layout[600]};
  grid-template-rows: auto ${props => props.theme.size.layout[600]};
  grid-template-areas:
    "banner-body"
    "banner-blob";
  min-height: 100vh;
  z-index: 1;
  grid-area: banner;
`

const BannerBody = styled.div`
  display: flex;
  padding: 0 ${props => props.theme.size.layout[600]};
  padding-top: ${props => props.theme.size.layout[500]};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: banner-body;
  background-color: ${props => props.theme.colors.yellow[500]};
`

const BannerTitle = styled.h1`
  position: relative;
  font-weight: 800;
  text-align: center;
  line-height: 1;
  user-select: none;
  letter-spacing: -0.0125em;
  font-size: ${props => props.theme.size.layout[600]};
  color: ${props => props.theme.colors.black[900]};
`

const Blob = styled(BlobAnimated).attrs({
  color: props => props.theme.colors.yellow[500] 
})`
`
const BannerAccent = styled.div`
  transform: rotate(180deg);
  overflow: hidden;
  grid-area: banner-blob;
`
const BannerMessage = styled(Message)`
  margin-top: ${props => props.theme.size.layout[400]};
`

export default ({ title, children, author, intro, twitter, ...props }) => (
  <Banner {...props}>
    <BannerBody>
      <BannerTitle>
        {title}
      </BannerTitle>
      <BannerMessage
        author={author}
        children={intro}
        to={`https://twitter.com/scotato/status/${twitter}`}
      />
    </BannerBody>
    <BannerAccent>
      <Blob />
    </BannerAccent>
  </Banner>
)
