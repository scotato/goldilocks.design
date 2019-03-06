require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `goldilocks design`,
    titleAlt: `goldilocks design - building software that's just right`,
    description: `building software that's just right`,
    author: `@scotato`,
    twitter: '@scotato',
    siteUrl: 'https://goldilocks.design', // https://www.gatsbyjs.org/docs/path-prefix
    shortTitle: 'goldilocks.design', // Used for App manifest e.g. Mobile Home Screen
    shareImage: '/images/share.png', // Open Graph Default Share Image. 1200x1200 is recommended
    shareImageWidth: 900, // Change to the width of your default share image
    shareImageHeight: 600, // Change to the height of your default share image
    siteLogo: '/images/logo-512.png', // Logo used for SEO, RSS, and App manifest
  },
  mapping: {
    'ProjectsYaml.app': `AppsYaml`,
    'ProjectsYaml.tech': `TechYaml`,
    'TechYaml.tech': `TechYaml`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        }
      }
    },
    // {
    //   resolve: `gatsby-source-twitter`,
    //   options: {           
    //       q: `scotato`,    
    //       credentials: {
    //           consumer_key: `${process.env.TWITTER_KEY}`,
    //           consumer_secret: `${process.env.TWITTER_SECRET}`,
    //           bearer_token: `${process.env.TWITTER_TOKEN}`
    //       },
    //       tweet_mode: 'extended'
    //   }
    // },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /brand|icons/
          }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `goldilocks-design`,
        short_name: `goldilocks`,
        start_url: `/`,
        background_color: `#F6D55C`,
        theme_color: `#F6D55C`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
        anonymize: true
      },
    },
    'gatsby-plugin-netlify'
  ],
}
