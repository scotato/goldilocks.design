import styled, { keyframes } from 'styled-components'
import blob from '../../static/images/blob-line.svg'

const slide = keyframes`
  0% {
    transform: translateX(0) scale(1, 0.5);
  }

  50% {
    transform: translateX(-50vw) scale(2, 1);

  }

  100% {
    transform: translateX(-100vw) scale(1, 0.5);
  }
`;

const Blob = styled.img.attrs({
  src: blob
})`
  position: absolute;
  width: 200vw;
`

export const BlobAnimated = styled(Blob)`
  animation: ${slide} 12s linear infinite;
  transform-origin: top;
`

export default Blob