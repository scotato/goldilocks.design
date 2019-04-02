import styled, { keyframes } from 'styled-components'
import BlobLine from '../content/brand/blob-line.svg'

const gooey = keyframes`
  0% {
    transform: translateX(0) scale(1, 0.5);
  }

  50% {
    transform: translateX(-50vw) scale(2, 1);
  }

  100% {
    transform: translateX(-100vw) scale(1, 0.5);
  }
`

const Blob = styled(BlobLine)`
  width: 200vw;
  user-select: none;
  height: ${props => props.theme.size.layout[600]};
  
  ${props => props.theme.media.tabletHorizontal`
    height: ${props => props.theme.size.layout[650]};
  `}

${props => props.theme.media.phone`
    height: ${props => props.theme.size.layout[700]};
  `}

  background-color: ${props => props.color};
  will-change: background-color;
  transition: background-color .2s ease-out;

  path {
    fill: ${props => props.color};
    will-change: fill;
    transition: fill .2s ease-out;
  }
`

export const BlobAnimated = styled(Blob)`
  animation: ${gooey} 12s linear infinite;
  transform-origin: bottom;
`

export default Blob
