import React from 'react'
import { graphql } from 'gatsby'
import groupBy from 'lodash/groupBy'

import Layout, { Container } from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import { Back } from '../components/Link'
import Group from '../components/Group'
import CardMedium from '../components/CardMedium'

const ToolsPage = ({ data }) => {
  const tools = data.tools.edges.map(tool => tool.node)
  const toolsByCategory = groupBy(tools, 'frontmatter.category')
  const categoryOrder = [
    'programming-language',
    'user-interface',
    'design',
    'web',
    'devops',
    'api',
    'augmented-reality'
  ]

  return (
    <Layout>
      <SEO />
      <Header
        title="Tools"
        primary={<Back to='/' />}
      />
      <Container>
        {categoryOrder.map(category => (
          <Group title={category.replace('-', ' ')}>
            {toolsByCategory[category].map(tool => (
              <CardMedium
                to={tool.fields.slug}
                key={tool.fields.slug}
                badge={tool.frontmatter.badge.childImageSharp.fluid}
                title={tool.frontmatter.title}
                description={tool.frontmatter.description}
              />
            ))}
          </Group>
        ))}
      </Container>
    </Layout>
  )
}

export default ToolsPage

export const pageQuery = graphql`
  query {
    tools: allMarkdownRemark(
        filter: { fields: { collection: { eq: "tools" } } }
        sort: { fields: [frontmatter___title], order: ASC }
      ) {
        edges {
          node {
            ...Tool
            frontmatter{
              ...ToolFrontmatter
              ...Collections
            }
          }
        }
    }
  }
`
