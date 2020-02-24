import React, { useState } from 'react'
import styled from 'styled-components'
import isemail from 'isemail'

import Group from './Group'
import { ButtonText } from './Button'
import Input from './Input'

const Form = styled.form`
`

const Hidden = styled.p`
  display: none;
`

const encode = data => Object
  .keys(data)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join("&")

export default props => {
  const formName = "subscribe"
  const [honeypot, setHoneypot] = useState(null)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const { context } = props

  const isEmail = !!email.length
  const isEmailValid = isemail.validate(email)
  const isSubmitDisabled = success || isSubmitting || !isEmailValid
  const isSubmitVisible = !success && isEmail
  const emailIcon = success
    ? 'envelope-open-text'
    : isEmail
      ? isEmailValid
        ? 'check'
        : 'exclamation-circle'
      : 'envelope'
  const groupTitle = success ? "Subscribed" : "Subscribe"
  const inputTitle = success ? "Email Updates" : "Email"
  const onChangeHoneypot = event => setHoneypot(event.target.value)
  const onChangeEmail = event => setEmail(event.target.value)
  
  const handleSubmit = event => {
    const state = { context, email }

    event.preventDefault()
    setIsSubmitting(true)

    const body = {
      "form-name": formName,
      subscribe: true,
      ...state
    }

    if (honeypot) {
      body["bot-field"] = honeypot
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(body)
    })
    .then(() => setSuccess(true))
    .catch(error => {
      setIsSubmitting(false)
      alert(error)
    })

  }

  return (
    <Form
      name={formName}
      method="post"
      action={context}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <noscript>
        <p>This form won’t work with Javascript disabled</p>
      </noscript>

      <Hidden>
        <label>Don’t fill this out if you're human: <input name="bot-field" value={honeypot}onChange={onChangeHoneypot} /></label>
        <input type="hidden" name="form-name" value={formName} />
        <input type="text" name="context" value={context} />
      </Hidden>

      <Group
        title={groupTitle}
        detail={isSubmitVisible && (
          <ButtonText type="submit" disabled={isSubmitDisabled}>Submit</ButtonText>
        )}
      >
        <Input
          type="email"
          name="email"
          title={inputTitle}
          icon={emailIcon}
          maxLength={30}
          value={email}
          disabled={success}
          onChange={onChangeEmail}
        />
      </Group>
    </Form>
  )
}
