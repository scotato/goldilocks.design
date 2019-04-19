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

const PageFooter = id => {
  switch (id) {
    case 'home':
    case 'blog':
    case 'projects':
      return <Social />
    case 'lock':
      return true
    default:
      return null
  }
}

const Page = props => {
  const { page, post, project } = props.data
  const { id, color, colorWeight } = page
  const navBlacklist = ['lock', '404', 'home']
  const banner = post || project

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle bodyBg={theme.colors[color][colorWeight]} />
        <SEO title={banner && banner.frontmatter.title} description={banner && `${banner.timeToRead} minute read`} />
        <Layout hasBanner={!!banner}>
          {banner && <Banner page={page} {...banner.frontmatter} />}
          <Device
            page={page}
            navTitle={!navBlacklist.includes(id) && (banner ? banner.fields.collection : 'Home')}
            navTo={banner ? `/${banner.fields.collection}` : '/home'}
            detail={banner && moment(banner.frontmatter.date).format('MMM D, YYYY')}
            hasBanner={!!banner}
            footer={PageFooter(id)}
          >
            {props.children}
          </Device>
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default Page