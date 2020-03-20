import React from 'react'

import SEO from '../components/SEO'
import Header from '../components/Header'
import { Body } from '../components/Layout'
import Container from '../components/Container'
import Link from '../components/Link'

export default () => (
  <>
    <Header title="Not Found" />
    <SEO />
    <Body>
      <Container>
        <h1>Not Found</h1>
        <p>This page has gone missing or never existed <span role="img" aria-label="fingers crossed">🤞</span></p>
        <h2>HTTP 404</h2>
        <p>The <Link to="https://en.wikipedia.org/wiki/HTTP_404">HTTP 404 error message</Link> is a Hypertext Transfer Protocol (HTTP) standard response code, in computer network communications, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested.</p>
        <p>The website hosting server will typically generate a "404 Not Found" web page when a user attempts to follow a broken or dead link; hence the 404 error is one of the most recognizable errors encountered on the World Wide Web. </p>
      </Container>
    </Body>
  </>
)
