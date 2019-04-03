import React from 'react'
import { ThemeProvider } from 'styled-components'
import moment from 'moment'

import GlobalStyle from '../theme/global-style'
import Layout from './Layout'
import Device from './Device'
import SEO from './SEO'
import Banner from './Banner'
import theme from '../theme'

const Page = props => {
  const { page, post } = props.data
  const { id, title, color, colorWeight } = page
  const navBlacklist = ['lock', '404', 'home']

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle bodyBg={theme.colors[color][colorWeight]} />
        <SEO title={title} description={post && post.excerpt} />
        <Layout hasBanner={!!post}>
          {post && <Banner {...post.frontmatter} />}
          <Device
            page={page}
            navTitle={!navBlacklist.includes(id) && (post ? 'Blog' : 'Home')}
            navTo={post ? '/blog' : '/home'}
            detail={post && moment(post.frontmatter.date).format('MMM D, YYYY')}
            backgroundIsFlipped={!!post}
            footer={id === 'home' || id === 'lock'}
          >
            {props.children}
          </Device>
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default Page