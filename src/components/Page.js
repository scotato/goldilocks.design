import React from 'react'
import { ThemeProvider } from 'styled-components'
import moment from 'moment'

import GlobalStyle from '../theme/global-style'
import Layout from './Layout'
import Device from './Device'
import SEO from './SEO'
import Banner from './Banner'
import Social from './Social'
import theme from '../theme'

const PageFooter = props => {
  switch (props.id) {
    case 'home':
    case 'blog':
    return <Social />
    case 'lock':
      return true
    default:
      return false
  }
}

const Page = props => {
  const { page, post } = props.data
  const { id, color, colorWeight } = page
  const navBlacklist = ['lock', '404', 'home']
  const hasBanner = !!post

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle bodyBg={theme.colors[color][colorWeight]} />
        <SEO title={post && post.frontmatter.title} description={post && `${post.timeToRead} minute read`} />
        <Layout hasBanner={hasBanner}>
          {post && <Banner {...post.frontmatter} />}
          <Device
            page={page}
            navTitle={!navBlacklist.includes(id) && (post ? 'Blog' : 'Home')}
            navTo={post ? '/blog' : '/home'}
            detail={post && moment(post.frontmatter.date).format('MMM D, YYYY')}
            hasBanner={hasBanner}
            footer={<PageFooter id={id} />}
          >
            {props.children}
          </Device>
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default Page