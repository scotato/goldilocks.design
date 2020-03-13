import { css } from 'styled-components'

export default css`
  .gatsby-highlight {
    padding: ${props => props.theme.size[500]} ${props => props.theme.size[600]};
    margin-bottom: ${props => props.theme.size[600]};
    border-radius: ${props => props.theme.size[500]};
    font-size: ${props => props.theme.size[500]};
    color: ${props => props.theme.grayscale[700]};
    background-color: ${props => props.theme.grayscale[100]};

    &:last-child {
      margin-bottom: 0;
    }

    pre {
      margin-bottom: 0;
    }

    .dark-mode & {
      color: ${props => props.theme.grayscale[100]};
      background-color: ${props => props.theme.grayscale[800]};
    }

    .comment {
      color: ${props => props.theme.grayscale[500]};
      font-style: italic;
    }

    .parameter {
      color: ${props => props.theme.grayscale[600]};
      
      .dark-mode & {
        color: ${props => props.theme.grayscale[400]};
      }
    }

    .constant {
      color: rgb(255, 184, 108);
    }

    .char {
      color: rgb(69, 169, 249);
    }

    .string,
    .symbol,
    .inserted {
      color: ${props => props.theme.color.cyanDark};

      .dark-mode & {
        color: ${props => props.theme.color.cyan};
      }
    }

    .attr-name {
      color: ${props => props.theme.color.orange};

      .dark-mode & {
        color: ${props => props.theme.color.orangeLight};
      }
    }

    .builtin,
    .function {
      color: ${props => props.theme.color.blue};

      .dark-mode & {
        color: ${props => props.theme.color.blueLight};
      }
    }

    .keyword,
    .class-name {
      color: ${props => props.theme.color.pinkDark};

      .dark-mode & {
        color: ${props => props.theme.color.pink};
      }
    }

    .changed {
      color: rgb(255, 117, 181);
    }

    .deleted {
      color: rgb(255, 44, 109);
    }
  }

  .language-text {
    padding: ${props => props.theme.size[100]} ${props => props.theme.size[300]};
    font-weight: 500;
    font-size: 18px;
    background-color: ${props => props.theme.grayscale[100]};
    border-radius: ${props => props.theme.size[300]};

    .dark-mode & {
      background-color: ${props => props.theme.grayscale[800]};
    }
  }
`
