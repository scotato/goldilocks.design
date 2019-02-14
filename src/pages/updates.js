import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Card from '../components/Card'
import { AppBadge } from '../components/AppIcon'

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: center;
  width: ${props => props.theme.size.layout[800]};
`

const cards = [
  {
    title: 'Design Systems',
    detail: 'Blog',
    date: '2019-02-11',
    to: '/blog/design-systems',
    appId: 1
  }, {
    title: 'Goldilocks Design',
    detail: 'Projects',
    date: '2019-01-10',
    to: '/projects/goldilocks-design',
    appId: 2
  }, {
    title: 'Gatsby',
    detail: 'Tools',
    date: '2017-01-09',
    to: '/tools/gatsby',
    appId: 3
  }
]

const UpdatesPage = props => {
  const page = props.data.page.edges[0].node.frontmatter

  return (
    <Layout page={page}>
      <Device page={page} shouldShowNav>
        <Cards>
          {cards.map(card => (
            <Card
              key={card.date}
              badge={<AppBadge appId={card.appId} />}
              title={card.title}
              detail={card.detail}
              date={card.date}
              to={card.to}
            />
          ))}
        </Cards>
      </Device>
    </Layout>
  )
}

UpdatesPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape(PropTypes.object),
    page: PropTypes.shape({
      edges: PropTypes.array,
    }),
    apps: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default UpdatesPage

export const pageQuery = graphql`
  query {
    page: allMarkdownRemark(filter: { frontmatter: { slug: { eq: "updates" } } }) {
      edges {
        node {
          frontmatter {
            icon
            title
            color
            colorWeight
          }
        }
      }
    }
  }
`