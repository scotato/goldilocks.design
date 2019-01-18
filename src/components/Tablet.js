import React from 'react'
import styled from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky'

import StatusBar from './StatusBar'
import UserBar from './UserBar'
import { BlobAnimated } from './Blob'

const aspectRatio = 2732 / 2048

const TabletGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto ${90 * aspectRatio}vh auto;
  grid-template-rows: 15vh 70vh 15vh;
  grid-template-areas:
    ". statusbar ."
    ". body ."
    ". userbar .";
  min-height: 100vh;
  pointer-events: none;
  z-index: 10;
`

const TabletBody = styled.div`
  margin: -85vh auto 0;
  padding: 5vh 2.5vh 15vh;
  width: ${90 * aspectRatio}vh;
  background-color: white;
`

const TabletShadow = styled.div`
  margin: 5vh 0;
  grid-area: 1 / 2 / 4 / 3;
  border-radius: 5vh;
  box-shadow: 0 1vh 5vh rgba(0, 0, 0, 0.1);
  z-index: 1;
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
  grid-area: 2 / 1 / 3 / 2;
`

const OverlayRight = styled(OverlayBase)`
  grid-area: 2 / 3 / 3 / 4;
`

const OverlayBottom = styled(OverlayBase)`
  grid-area: 3 / 1 / 4 / 4;
  border-bottom: 1vh solid ${props => props.theme.colors.primary};
`

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
          <StatusBar />
          <UserBar />
          <TabletShadow />
          <OverlayTop>
            <BlobAnimated />
          </OverlayTop>
          <OverlayLeft />
          <OverlayRight />
          <OverlayBottom />
        </TabletGrid>
      )}
    </Sticky>

    <TabletBody>
      {props.children}
    </TabletBody>
  </StickyContainer>
)
