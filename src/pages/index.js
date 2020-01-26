import { graphql } from 'gatsby'

const HomePage = props => null

export default HomePage

export const pageQuery = graphql`
  query {
    page: screensYaml(id: { eq: "home" }) {
      ...ScreenInfo
    }
  }
`