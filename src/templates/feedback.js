import React, { useState } from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'

import Layout, { Container } from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Form from '../components/Form'
import Group from '../components/Group'
import { RowSmall } from '../components/LinkRowSmall'
import { Back } from '../components/Link'
 
const Project = ({ frontmatter: { title, logo, status, github }}) => status ? (
  <Group title="Project">
    <RowSmall
      title={title}
      badge={logo.childImageSharp.fluid}
      detail={moment(github.committedAt).format("MMM YYYY")}
    />
  </Group>
) : null

const Post = ({ frontmatter: { title, badge, createdAt }}) => createdAt ? (
  <Group title="Post">
    <RowSmall
      title={title}
      badge={badge.childImageSharp.fluid}
      detail={moment(createdAt).format("MMM YYYY")}
    />
  </Group>
) : null

export default ({
  data: { project, post },
  pageContext: { from },
  navigate
}) => {
  const [submitButton, setSubmitButton] = useState(null)
  const topic = project.frontmatter.title || post.frontmatter.title
  
  return (
    <Layout>
      <SEO />
      <Header
        title="Feedback"
        primary={<Back to={from} />}
        secondary={submitButton}
        secondaryBlock
      />
      <Container>
        <Project {...project} />
        <Post {...post} />
        <Form
          name="feedback"
          action={from}
          topic={topic}
          setSubmitButton={setSubmitButton} 
          navigate={navigate}
        />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query FeedbackByFrom($from: String!) {
    project: mdx(fields: { slug: { eq: $from } }) {
      ...Project
      frontmatter {
        ...ProjectFrontmatter
      }
    }

    post: mdx(fields: { slug: { eq: $from } }) {
      ...Post
      frontmatter {
        ...PostFrontmatter
      }
    }
  }
`
