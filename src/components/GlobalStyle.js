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
      bodyColor: theme.isDarkMode ? theme.grayscale[100] : theme.grayscale[900],
      bodyBg: theme.isDarkMode ? 'black' : theme.grayscale[100],
      headingsMarginBottom: theme.size[300],
      paragraphMarginBottom: theme.size[400],
      linkColor: theme.color.info,
      linkHoverColor: theme.color.info,
      linkHoverDecoration: 'none'
    })
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 2em;
    margin-bottom: 0.25em;
    font-weight: 700;
    line-height: 1;

    &:first-child {
      margin-top: 0;
    }

    ${props => props.theme.media.phone`
      margin-top: 1em;
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

  html,
  body,
  #___gatsby,
  #___gatsby > div {
    height: 100%;
  }
`
 
export default GlobalStyle
