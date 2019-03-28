import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'
 
const GlobalStyle = createGlobalStyle`
  ${props =>
    reboot({
      black: props.theme.colors.black[900],
      // fontFamilyBase:
      //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      // fontFamilyMonospace:
      //   'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontSizeBase: props.theme.size.typographyBase,
      // fontWeightBase: 400,
      lineHeightBase: 1.6,
      // bodyColor: props.theme.colors.black[900],
      bodyBg: props.bodyBg || props.theme.colors.primary,
      // headingsMarginBottom: '0.5rem',
      // paragraphMarginBottom: '1rem',
      // labelMarginBottom: '0.5rem',
      // dtFontWeight: 700,
      // linkColor: props.theme.colors.yellow[500],
      // linkDecoration: 'none',
      // linkHoverColor: '#0056b3',
      linkHoverDecoration: 'none',
      // tableCellPadding: '0.75rem',
      // textMuted: '#6c757d'
    })
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 3.2rem;

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    font-size: ${props => props.theme.size.layout[500]};
    line-height: 1;
  }

  h2 {
    font-size: ${props => props.theme.size.layout[450]};
  }

  h3 {
    font-size: ${props => props.theme.size.layout[400]};
  }

  h4 {
    font-size: ${props => props.theme.size.layout[350]};
  }

  h5 {
    font-size: ${props => props.theme.size.layout[300]};
  }

  blockquote {
    margin: ${props => props.theme.size.layout[500]} 0 ;
    padding: ${props => props.theme.size.layout[300]} ${props => props.theme.size.layout[400]};
    color: ${props => props.theme.colors.black[700]};
    background-color: ${props => props.theme.colors.black[200]};
    border-radius: 2em;

    p:last-child {
      margin-bottom: 0;
    }
  }
`
 
export default GlobalStyle;