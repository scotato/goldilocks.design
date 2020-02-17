import React from 'react'
import moment from 'moment'

import Group from './Group'
import LinkRowSmall from './LinkRowSmall'

const Projects = props => props.items.length ? (
  <Group title="Projects">
    {props.items.sort((a,b) =>
      new Date(b.frontmatter.github.committedAt) - new Date(a.frontmatter.github.committedAt)
    ).map(project => (
      <LinkRowSmall
        to={project.fields.slug}
        key={project.fields.slug}
        badge={project.frontmatter.logo.childImageSharp.fluid}
        title={project.frontmatter.title}
        description={project.frontmatter.description}
        detail={moment(project.frontmatter.github.committedAt || project.frontmatter.github.createdAt).format("MMM YYYY")}
      />
    ))}
  </Group>
) : null

const Posts = props => props.items.length ? (
  <Group title="Posts">
    {props.items.sort((a,b) =>
      new Date(b.frontmatter.createdAt) - new Date(a.frontmatter.createdAt)
    ).map(post => (
      <LinkRowSmall
        to={post.fields.slug}
        key={post.fields.slug}
        badge={post.frontmatter.badge.childImageSharp.fluid}
        title={post.frontmatter.title}
        detail={moment(post.frontmatter.createdAt).format("MMM YYYY")}
      />
    ))}
  </Group>
) : null

const Tools = props => props.items.length ? (
  <Group title="Tools">
    {props.items.map(tool => (
      <LinkRowSmall
        to={tool.fields.slug}
        key={tool.fields.slug}
        badge={tool.frontmatter.badge.childImageSharp.fluid}
        title={tool.frontmatter.title}
      />
    ))}
  </Group>
) : null

export default ({ projects, posts, tools }) => (
  <>
    <Projects items={projects || []} />
    <Posts items={posts || []} />
    <Tools items={tools || []} />
  </>
)
