import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'
 
const GlobalStyle = createGlobalStyle`
  ${({ theme }) =>
    reboot({
      black: theme.grayscale[900],
      fontFamilyBase:
        '-apple-system, BlinkMacSystemFont, Open Sans, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      fontFamilyMonospace:
        'Source Code Pro, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontSizeBase: theme.size[600],
      fontWeightBase: 400,
      lineHeightBase: 1.6,
      headingsMarginBottom: theme.size[300],
      paragraphMarginBottom: theme.size[400],
      linkColor: theme.color.info,
      linkHoverColor: theme.color.info,
      linkHoverDecoration: 'none'
    })
  }

  html,
  body,
  #___gatsby,
  #___gatsby > div {
    height: 100%;
  }

  body {
    color: ${props => props.theme.grayscale[900]};
    background-color: ${props => props.theme.grayscale[100]};
    
    &.dark-mode {
      color: ${props => props.theme.grayscale[100]};
      background-color: black;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: ${props => props.theme.size[800]};
    margin-bottom: ${props => props.theme.size[400]};
    font-weight: 700;
    line-height: 1;

    &:first-child {
      margin-top: 0;
    }

    ${props => props.theme.media.phone`
      margin-top: ${props => props.theme.size[600]};
    `}
  }

  h1 {
    font-size: ${props => props.theme.size[800]};
  }

  h2 {
    font-size: ${props => props.theme.size[700]};
  }

  h3 {
    font-size: ${props => props.theme.size[600]};
  }

  h4 {
    font-size: ${props => props.theme.size[500]};
  }

  h5 {
    font-size: ${props => props.theme.size[400]};
  }

  h6 {
    font-size: ${props => props.theme.size[300]};
  }

  strong {
    font-weight: 700;
  }

  p {
    margin-bottom: ${props => props.theme.size[700]};
    font-weight: 300;

    ${props => props.theme.media.phone`
      margin-bottom: ${props => props.theme.size[500]};
    `}
  }

  li {
    font-weight: 300;
  }
`
 
export default GlobalStyle
