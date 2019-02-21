import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Link from '../components/Link'

const TechGrid = styled.div`
  display: grid;
  position: absolute;
  padding: ${props => props.theme.size.layout[450]};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-column-gap: ${props => props.theme.size.layout[500]};
  justify-self: center;
  align-self: center;
`

const TechSticker = styled(Link)`
  transform:
    scale(${props => Math.random() / 2 + 1.5})
    rotate(${props => 15 - Math.random() * 30}deg);
`

const Image = styled(Img)`
  width: 100%;
  border-radius: ${props => props.theme.size.layout[300]};
  filter: drop-shadow(0 0 ${props => props.theme.size.layout[50]} rgba(0, 0, 0, 0.125));
`

const shuffleArray = array => {
  const arrayShuffled = [...array]
  for (let i = arrayShuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayShuffled[i], arrayShuffled[j]] = [arrayShuffled[j], arrayShuffled[i]];
  }
  return arrayShuffled
}

const TechPage = ({ data: { page, tech }}) => (
  <Layout page={page}>
    <Device
      page={page}
      footer
      shouldShowNav
    >
      <TechGrid>
        {shuffleArray(tech.edges).map(item => (
          <TechSticker to={`/tech/${item.node.slug}`}>
            <Image
              title={item.node.title}
              fluid={item.node.sticker.childImageSharp.fluid}
            />
          </TechSticker>
        ))}
      </TechGrid>
    </Device>
  </Layout>
)

TechPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
  }),
}

export default TechPage

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "tech" }) {
      ...AppInfo
    }
    tech: allTechYaml {
      edges {
        node {
          ...TechInfo
        }
      }
    }
  }
`