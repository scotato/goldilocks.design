import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ lang, meta, keywords, title, description, badge }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const shareTitle = title || data.site.siteMetadata.title
      const shareDescription = description || data.site.siteMetadata.description
      const shareImagePath = badge || data.site.siteMetadata.shareImage
      const shareImage = data.site.siteMetadata.siteUrl + shareImagePath

      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={data.site.siteMetadata.title}
          // titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: shareDescription,
            },
            {
              property: `image`,
              content: shareImage,
            },
            {
              property: `og:title`,
              content: shareTitle,
            },
            {
              property: `og:description`,
              content: shareDescription,
            },
            {
              property: `og:image`,
              content: shareImage,
            },
            {
              property: `og:image:width`,
              content: data.site.siteMetadata.shareImageWidth,
            },
            {
              property: `og:image:height`,
              content: data.site.siteMetadata.shareImageHeight,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary_large_image`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: shareTitle,
            },
            {
              name: `twitter:description`,
              content: shareDescription,
            },
            {
              name: `twitter:image`,
              content: shareImage,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : []
            )
            .concat(meta)}
        />
      )
    }}
  />
)

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        twitter
        shareImage
        shareImageWidth
        shareImageHeight
      }
    }
  }
`
