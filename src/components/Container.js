import styled, { css } from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.size[900]};
  max-width: calc(${props => props.theme.device.desktop} - ${props => props.theme.device.phoneSmall});

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
