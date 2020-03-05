require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `goldilocks design`,
    titleAlt: `goldilocks design - thoughts on the web`,
    description: `thoughts on the web`,
    author: `@scotato`,
    twitter: '@scotato',
    siteUrl: 'https://goldilocks.design', // https://www.gatsbyjs.org/docs/path-prefix
    shortTitle: 'goldilocks.design', // Used for App manifest e.g. Mobile Home Screen
    shareImage: '/images/share.png', // Open Graph Default Share Image. 1200x1200 is recommended
    shareImageWidth: 1280,
    shareImageHeight: 640,
    siteLogo: '/images/logo-512.png', // Logo used for SEO, RSS, and App manifest
    content:[
      {
        id: 'posts',
        icon: 'pen-alt',
        slug: 'posts',
        title: 'Posts',
        color: 'yellow'
      },
      {
        id: 'projects',
        icon: 'pencil-ruler',
        slug: 'projects',
        title: 'Projects',
        color: 'blue'
      },
      {
        id: 'tools',
        icon: 'tools',
        slug: 'tools',
        title: 'Tools',
        color: 'orange'
      },
      {
        id: 'settings',
        icon: 'cogs',
        slug: 'settings',
        title: 'Settings',
        color: 'default'
      }
    ]
  },
  mapping: {
    'MarkdownRemark.frontmatter.projects': `MarkdownRemark.frontmatter.id`,
    'MarkdownRemark.frontmatter.posts': `MarkdownRemark.frontmatter.id`,
    'MarkdownRemark.frontmatter.tools': `MarkdownRemark.frontmatter.id`,
    'MarkdownRemark.frontmatter.github': `GithubRepo.url`,
    'MarkdownRemark.frontmatter.npm': `NPMPackage.url`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-use-dark-mode`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-external-links`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tools`,
        path: `${__dirname}/src/content/tools`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, posts } }) => {
              return posts.edges.map(edge => {
                return Object.assign({}, edge.node.childMarkdownRemark.frontmatter, {
                  description: edge.node.childMarkdownRemark.excerpt,
                  date: edge.node.childMarkdownRemark.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/posts/${edge.node.childMarkdownRemark.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/posts/${edge.node.childMarkdownRemark.fields.slug}`,
                  custom_elements: [{ "content:encoded": edge.node.childMarkdownRemark.html }],
                })
              })
            },
            query: `
              {
                posts: allFile(
                  sort: { order: DESC, fields: [childMarkdownRemark___frontmatter___date] },
                  filter: {
                    internal: {mediaType: {eq: "text/markdown"}}, 
                    sourceInstanceName: {eq: "posts"}
                  }
                ) {
                  edges {
                    node {
                      childMarkdownRemark {
                        excerpt
                        html
                        fields { slug }
                        frontmatter {
                          title
                          date
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Goldilocks Design RSS Feed",
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Source Sans Pro`,
    //         variants: [`200`,`200i`, `300`,`300i`, `400`, `400i`, `600`, `600i`, `700`, `700i`, `900`, `900i`]
    //       },
    //       {
    //         family: `Source Code Pro`,
    //         variants: [`200`, `300`, `400`, `500`, `600`, `700`, `900`]
    //       },
    //     ],
    //   },
    // },
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
