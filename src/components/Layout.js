import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto ${props => props.theme.size.layout[900]} auto;
  grid-template-rows: ${props => props.theme.size.layout[400]} auto ${props => props.theme.size.layout[400]};
  grid-template-areas:
    ". layout-body-margin-top ."
    "layout-body-margin-left layout-body layout-body-margin-right"
    ". layout-body-margin-bottom .";
  min-height: 100vh;
  width: 100vw;

  ${props => props.theme.media.tabletHorizontal`
    grid-template-columns: ${props => props.theme.size.layout[500]} auto ${props => props.theme.size.layout[500]};
    grid-template-rows: ${props => props.theme.size.layout[500]} auto ${props => props.theme.size.layout[500]};
  `}

${props => props.theme.media.phone`
    grid-template-columns: ${props => props.theme.size.layout[500]} auto ${props => props.theme.size.layout[500]};
    grid-template-rows: ${props => props.theme.size.layout[500]} auto ${props => props.theme.size.layout[500]};
  `}
`

export default Layout
