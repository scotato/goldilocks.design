import React from 'react'
import styled from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky'

import StatusBar from './StatusBar'
import { BlobAnimated } from './Blob'

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
  overflow: hidden;
`

const TabletBody = styled.div`
  margin: -90vh auto 0;
  padding: 10vh 2.5vh;
  width: ${80 * aspectRatio}vh;
  background-color: white;
`

const OverlayBase = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.black[100]};
  overflow: hidden;
  user-select: none;
`

const OverlayTop = styled(OverlayBase)`
  grid-area: 1 / 1 / 2 / 4;
`

const OverlayLeft = styled(OverlayBase)`
  grid-area: 1 / 1 / 4 / 2;
`

const OverlayRight = styled(OverlayBase)`
  grid-area: 1 / 3 / 4 / 4;
`

const OverlayBottom = styled(OverlayBase)`
  grid-area: 3 / 1 / 4 / 4;
  border-bottom: 1vh solid ${props => props.theme.colors.primary};
`

const BlobTopLeft = styled(BlobAnimated)`
  top: 0;  
  left: 0;
`

const BlobTopRight = styled(BlobAnimated)`
  top: 0;  
  left: initial;
  right: -100vw;
`

const Overlay = props => (
  <React.Fragment>
    <OverlayTop>
      <BlobTopLeft />    
    </OverlayTop>
    <OverlayLeft>
      <BlobTopLeft />
    </OverlayLeft>
    <OverlayRight>
      <BlobTopRight />
    </OverlayRight>
    <OverlayBottom />
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
          <Tablet>
            <StatusBar />
          </Tablet>
        </TabletGrid>
      )}
    </Sticky>
    <TabletBody>
      {props.children}
    </TabletBody>
  </StickyContainer>
)
