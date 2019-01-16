import React from 'react'
import styled from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky'

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
  margin: -1.5rem;
  border: 1.5rem solid ${props => props.theme.colors.black[900]};
  border-radius: 2.125rem;
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
  background-color: ${props => props.theme.colors.primary};
`

const OverlayTop = styled(OverlayBase)`
  grid-area: 1 / 1 / 2 / 4;
`

const OverlayBottom = styled(OverlayBase)`
  grid-area: 3 / 1 / 4 / 4;
  background-color: ${props => props.theme.colors.black[100]};
`

const OverlayLeft = styled(OverlayBase)`
  grid-area: 1 / 1 / 4 / 2;
  border-top: 15vh solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.black[100]};
`

const OverlayRight = styled(OverlayBase)`
  grid-area: 1 / 3 / 4 / 4;
  border-top: 15vh solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.black[100]};
`

const Overlay = props => (
  <React.Fragment>
    <OverlayTop />
    <OverlayBottom />
    <OverlayLeft />
    <OverlayRight />
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
