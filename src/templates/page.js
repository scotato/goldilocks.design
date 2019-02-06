import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Body from '../components/Body'

export const GenericPageTemplate = ({ title, brand, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout pageTitle={title} brand={brand}>
      <section>
        <Header />
        <Body>
          <PageContent className="content" content={content} />
        </Body>
      </section>
    </Layout>
  )
}

GenericPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Page = ({ data }) => {
  const { markdownRemark: page } = data
  const brand = data.brand.edges[0].node
  const logo = {
    id: brand.frontmatter.id,
    logo: brand.frontmatter.logo
  }

  return (
    <GenericPageTemplate
      contentComponent={HTMLContent}
      logo={logo}
      content={page.html}
      title={page.frontmatter.title}
      brand={brand}
    />
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const PageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }

    # brand: allMarkdownRemark(filter:{fields:{slug :{eq : "/brand/"}}}) {
    #   edges {
    #     node {
    #       html
    #       frontmatter {
    #         id
    #         tagline
    #         logo
    #         color
    #         social {
    #           title
    #           icon
    #           url
    #         }
    #         stores {
    #           id
    #           alt
    #           url
    #           img
    #         }
    #       }
    #     }
    #   }
    # }
  }
`
