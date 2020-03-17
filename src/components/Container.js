import styled, { css } from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.size[900]};
  max-width: calc(${props => props.theme.device.desktop} - ${props => props.theme.device.phoneSmall});
  will-change: max-width;
  transition: max-width 0.2s ease-out;

  ${props => props.theme.media.desktop`
    ${props.theme.isNavigationOpen ? css`
      max-width: calc(100vw - ${props => props.theme.device.phoneSmall});
    ` : css`
      max-width: calc(${props.theme.device.desktop} - ${props => props.theme.device.phoneSmall});
    `}
  `}

  ${props => props.theme.media.tabletVertical`
    max-width: 100vw;
  `}

  ${props => props.theme.media.phone`
    padding: ${props => props.theme.size[600]};
  `}

  ${props => props.theme.media.phoneSmall`
    padding: ${props => props.theme.size[500]};
  `}
`

export default Container
