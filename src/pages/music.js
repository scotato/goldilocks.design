import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Device from '../components/Device'


const Artists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
`

const ArtistCard = styled.div``
const ArtistAvatar = styled(Img)``

const TrackCard = styled.div``
const TrackArt = styled(Img)``


const MusicPage = ({ data: { page, artists, tracks, playlist }}) => (
  <Layout page={page}>
    <Device page={page} shouldShowNav>
      <Artists>
        {/* {artists.edges.map(({node: artist}) =>
          <ArtistCard key={artist.name}>
            {artist.image && <ArtistAvatar fluid={artist.image.localFile.childImageSharp.fluid} />}
            {console.log(artist)}
            {artist.genres}
          </ArtistCard>
        )} */}

        {tracks.edges.map(({node: track}) =>
          <TrackCard key={track.name}>
            {track.image && <TrackArt fluid={track.image.localFile.childImageSharp.fluid} />}
            {console.log(track)}
          </TrackCard>
        )}
      </Artists>
      {console.log(tracks)}
      {console.log(playlist)}
    </Device>
  </Layout>
)

MusicPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
  }),
}

export default MusicPage

export const pageQuery = graphql`
  query {
    page: appsYaml(id: { eq: "music" }) {
      ...AppInfo
    },
    artists: allSpotifyTopArtist(
      filter: { time_range: { eq: "medium_term" } }
      sort: { fields: order }
    ) {
      edges {
        node {
          name
          genres
          popularity
          spotifyId
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    },
    tracks: allSpotifyTopTrack(
      filter: { time_range: { eq: "short_term" } }
      sort: { fields: order }
      limit: 50
    ) {
      edges {
        node {
          name
          album {
            album_type
            artists {
              name
            }
          }
          artists {
            name
          }
          popularity
          explicit
          href
          spotifyId
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    },
    playlist: spotifyPlaylist(spotifyId: { eq: "3MYiW7kPg4VSbi2c4FQDuk" }) {
      name
      uri
      spotifyId
    }
  }
`
