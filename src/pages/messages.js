import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Card, { Cards } from '../components/Card'

const MessagesPage = ({ data: { page, tweets }}) => (
  <Layout page={page}>
    <Device page={page} shouldShowNav>
      <Cards>
          {tweets.edges.map(({node: tweet}) => (
            <Card
              key={tweet.id}
              badge={<img src={tweet.user.profile_image_url_https} />}
              title={tweet.full_text}
              detail={tweet.description}
              date={tweet.created_at}
              to={`https://twitter.com/i/web/status/${tweet.id_str}`}
            />
          ))}
        </Cards>
    </Device>
  </Layout>
)

MessagesPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
  }),
}

export default MessagesPage

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "messages" }) {
      ...AppInfo
    }
    tweets: allTweet {
      edges {
        node {
          id_str
          created_at
          full_text
          user {
            id
            name
            url
            profile_image_url_https
          }
        }
      }
    }
  }
`
