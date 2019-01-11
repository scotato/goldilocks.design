import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'
 
const colors = {
  brand: '#F6D55C'
}

const rebootCss = reboot({
  // black: '#000',
  // fontFamilyBase:
  //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  // fontFamilyMonospace:
  //   'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  // fontSizeBase: '1rem',
  // fontWeightBase: 400,
  // lineHeightBase: 1.5,
  bodyColor: 'white',
  bodyBg: colors.brand,
  // headingsMarginBottom: '0.5rem',
  // paragraphMarginBottom: '1rem',
  // labelMarginBottom: '0.5rem',
  // dtFontWeight: 700,
  // linkColor: '#007bff',
  // linkDecoration: 'none',
  // linkHoverColor: '#0056b3',
  // linkHoverDecoration: 'underline',
  // tableCellPadding: '0.75rem',
  // textMuted: '#6c757d'
});
 
const GlobalStyle = createGlobalStyle`
  ${rebootCss}

  body {
    display: flex;
    width: 100vw;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }
`
 
export default GlobalStyle;