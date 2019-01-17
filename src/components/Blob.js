import styled, { keyframes } from 'styled-components'
import blob from '../../static/images/blob-line.svg'

const gooey = keyframes`
  0% {
    transform: translateX(0) scale(1, 0.5);
  }

  50% {
    transform: translateX(-50vw) scale(2, 0.95);

  }

  100% {
    transform: translateX(-100vw) scale(1, 0.5);
  }
`

const Blob = styled.img.attrs({
  src: blob
})`
  position: absolute;
  width: 200vw;
  user-select: none;
`

export const BlobAnimated = styled(Blob)`
  animation: ${gooey} 12s linear infinite;
  transform-origin: top;
  top: 0;
  left: 0;
`

export default Blob
