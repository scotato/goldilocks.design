import React from 'react'
import styled, { keyframes } from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky'
import blob from '../../static/images/blob-line.svg'

const aspectRatio = 2732 / 2048

const TabletGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto ${80 * aspectRatio}vh auto;
  grid-template-rows: 10vh 80vh 10vh;
  grid-template-areas:
    ". . ."
    ". body ."
    ". . .";
  min-height: 100vh;
  pointer-events: none;
  z-index: 10;
`

const Tablet = styled.div`
  margin: -3vh;
  border: 3vh solid ${props => props.theme.colors.black[900]};
  border-radius: 4vh;
  z-index: 10;
  pointer-events: none;
  grid-area: body;
`

const TabletBody = styled.div`
  margin: -90vh auto 0;
  padding: 3rem;
  width: ${80 * aspectRatio}vh;
  background-color: white;
`

const OverlayBase = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.black[100]};
  overflow: hidden;
`

const OverlayTop = styled(OverlayBase)`
  grid-area: 1 / 1 / 2 / 4;
`

const OverlayBottom = styled(OverlayBase)`
  grid-area: 3 / 1 / 4 / 4;
`

const OverlayLeft = styled(OverlayBase)`
  grid-area: 1 / 1 / 4 / 2;
`

const OverlayRight = styled(OverlayBase)`
  grid-area: 1 / 3 / 4 / 4;
`

const slide = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100vw);
  }
`;

const Blob = styled.img.attrs({
  src: blob
})`
  position: absolute;
  top: 0;
  width: 200vw;
  animation: ${slide} 12s linear infinite;
`

const BlobTopLeft = styled(Blob)`
  left: 0;
`

const BlobTopRight = styled(Blob)`
  left: initial;
  right: -100vw;
`

const Overlay = props => (
  <React.Fragment>
    <OverlayTop>
      <BlobTopLeft />    
    </OverlayTop>
    <OverlayBottom />
    <OverlayLeft>
      <BlobTopLeft />
    </OverlayLeft>
    <OverlayRight>
      <BlobTopRight />
    </OverlayRight>
  </React.Fragment>
)

export default props => (
  <StickyContainer>
    <Sticky>
      {({
        style,
        isSticky,
        wasSticky,
        distanceFromTop,
        distanceFromBottom,
        calculatedHeight
      }) => (
        <TabletGrid style={style}>
          <Overlay />
          <Tablet />
        </TabletGrid>
      )}
    </Sticky>
    <TabletBody>
      {props.children}
      {props.children}
      {props.children}
    </TabletBody>
  </StickyContainer>
)
