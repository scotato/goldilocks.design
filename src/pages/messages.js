import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Device from '../components/Device'
import Message, { Messages } from '../components/Message'

const filterUrl = text => text.includes('http')
  ? text.slice(0, text.indexOf('http'))
  : text

const MessagesPage = ({ data: { page, tweets }}) => (
  <Layout page={page}>
    <Device page={page} shouldShowNav>
      <Messages>
        {console.log(tweets)}
        {tweets.edges.map(({node: tweet}) => (
          <Message
            key={tweet.id}
            author={tweet.user.screen_name}
            timestamp={tweet.created_at}
            banner={tweet.entities.media && tweet.entities.media[0].media_url_https}
            children={filterUrl(tweet.full_text)}
            to={`https://twitter.com/i/web/status/${tweet.id_str}`}
          />
        ))}
      </Messages>
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
          text
          entities {
            media {
              id
              id_str
              indices
              media_url
              media_url_https
              url
              display_url
              expanded_url
              type
              sizes {
                thumb {
                  w
                  h
                  resize
                }
                small {
                  w
                  h
                  resize
                }
                medium {
                  w
                  h
                  resize
                }
                large {
                  w
                  h
                  resize
                }
              }
              video_info {
                variants {
                  content_type
                  url
                }
              }
            }
            urls {
              url
              expanded_url
              display_url
            } 
          }
          user {
            id
            screen_name
            url
          }
        }
      }
    }
  }
`
