import styled, { keyframes } from 'styled-components'
import BlobLine from '.././content/brand/blob-line.svg'

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
  height: 100%;
  user-select: none;

  path {
    fill: ${props => props.theme.colors.primary};
  }
`

export const BlobAnimated = styled(Blob)`
  animation: ${gooey} 12s linear infinite;
  transform-origin: top;
  top: 0;
  left: 0;
`

export default Blob
