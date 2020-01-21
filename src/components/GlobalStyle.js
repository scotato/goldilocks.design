import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'
 
const GlobalStyle = createGlobalStyle`
  ${props =>
    reboot({
      black: props.theme.grayscale[900],
      fontFamilyBase:
        '-apple-system, BlinkMacSystemFont, Open Sans, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      fontFamilyMonospace:
        'Source Code Pro, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontSizeBase: `${20 / 1280 * 100}vw`,
      fontWeightBase: 400,
      lineHeightBase: 1.6,
      bodyColor: props.theme.grayscale[900],
      bodyBg: 'white',
      headingsMarginBottom: props.theme.size[300],
      paragraphMarginBottom: props.theme.size[400],
      linkColor: props.theme.color.primary,
      linkHoverColor: props.theme.color.primary,
      linkHoverDecoration: 'none',
    })
  }

  html,
  body,
  #___gatsby,
  #___gatsby > div {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: ${props => props.theme.size[500]};
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: ${props => props.theme.grayscale[900]};

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    font-size: ${props => props.theme.size[450]};
    line-height: 1;

    ${props => props.theme.media.tabletHorizontal`
      font-size: ${props => props.theme.size[550]};
    `}

    ${props => props.theme.media.tabletVertical`
      font-size: ${props => props.theme.size[600]};
    `}

    ${props => props.theme.media.phone`
      font-size: ${props => props.theme.size[650]};
    `}
  }

  h2 {
    font-size: ${props => props.theme.size[400]};

    ${props => props.theme.media.tabletVertical`
      font-size: ${props => props.theme.size[450]};
      margin-bottom: ${props => props.theme.size[400]};
    `}

    ${props => props.theme.media.phone`
      font-size: ${props => props.theme.size[550]};
      margin-bottom: ${props => props.theme.size[450]};
    `}
  }

  p {
    letter-spacing: -0.0125em;
    
    ${props => props.theme.media.tabletHorizontal`
      font-size: ${props => props.theme.size[350]};
    `}

    ${props => props.theme.media.tabletVertical`
      margin-bottom: ${props => props.theme.size[450]};
      font-size: ${props => props.theme.size[400]};
    `}

    ${props => props.theme.media.phone`
      margin-bottom: ${props => props.theme.size[550]};
      font-size: ${props => props.theme.size[500]};
    `}
  }

  blockquote {
    margin: ${props => props.theme.size[500]} 0 ;
    padding: ${props => props.theme.size[300]} ${props => props.theme.size[400]};
    color: ${props => props.theme.grayscale[700]};
    background-color: ${props => props.theme.grayscale[200]};
    border-radius: 2em;

    p:last-child {
      margin-bottom: 0;
    }
  }
`
 
export default GlobalStyle
