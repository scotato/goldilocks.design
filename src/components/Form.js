import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import isemail from 'isemail'
import TextAreaAutosize from 'react-textarea-autosize'
import Group from './Group'
import Row, { rowStyle } from './Row'
import { ButtonText } from './Button'
import Input from './Input'
import Switch from './Switch'

const Form = styled.form`
`

const Hidden = styled.p`
  display: none;
`

const TextArea = styled(TextAreaAutosize)`
  ${rowStyle}
  width: 100%;
  border: 0;

  ::placeholder {
    color: ${props => props.theme.grayscale[500]};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.color.info};
  }

  .dark-mode & {
    color: ${props => props.theme.grayscale[500]};

    ::placeholder {
      color: ${props => props.theme.grayscale[700]};
    }
  }
`

const encode = data => Object
  .keys(data)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join("&")

const Success = props => {
  const [countdown, setCountdown] = useState(3)
  countdown === 0 && props.redirect()
  
  useEffect(() => {
    const id = setInterval(() => {
      setCountdown(c => c - 1)
    }, 1000)
    return () => clearInterval(id);
  }, []);

  return (
    <Group>
      <Row
        icon="check"
        title="Feedback submitted"
        detail={`Redirecting in ${countdown}`}
      />
    </Group>
  )
}

export default props => {
  const form = useRef(null);
  const [honeypot, setHoneypot] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subscribe, setSubscribe] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const { action, topic, navigate, setSubmitButton } = props

  const onChangeHoneypot = event => setHoneypot(event.target.value)
  const onChangeName = event => setName(event.target.value)
  const onChangeEmail = event => setEmail(event.target.value)
  const onChangeMessage = event => setMessage(event.target.value)
  const onChangeSubscribe = () => setSubscribe(!subscribe)
  const onSubmitClick = () => form.current.dispatchEvent(new Event("submit"));
  
  const handleSubmit = event => {
    const state = { topic, name, email, message, subscribe }

    event.preventDefault()
    setIsSubmitting(true)

    const body = {
      "form-name": props.name,
      "context": action,
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

  const isEmail = email.length
  const isEmailValid = isemail.validate(email)
  const canSubmitEmail = !isEmail || isEmailValid
  const canSubmitMessage = message.length > 3
  const canSubscribe = subscribe ? isEmailValid : true
  const canSubmit = !isSubmitting && canSubmitMessage && canSubmitEmail && canSubscribe
  
  useEffect(() => setSubmitButton(
    <ButtonText disabled={!canSubmit} onClick={onSubmitClick}>Submit</ButtonText>
  ), [name, email, message, subscribe, isSubmitting, canSubmit, setSubmitButton])

  return !success ? (
    <Form
      name={props.name}
      method="post"
      action={action}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      ref={form}
    >
      <noscript>
        <p>This form won’t work with Javascript disabled</p>
      </noscript>

      <Hidden>
        <label>Don’t fill this out if you're human: <input name="bot-field" value={honeypot}onChange={onChangeHoneypot} /></label>
        <input type="hidden" name="form-name" value={props.name} />
        <input type="text" name="context" value={action} />
      </Hidden>

      <Group
        title="Contact"
        caption={subscribe && !isEmailValid && 'Email is required to subscribe to updates'}
      >
        <Input
          type="text"
          name="name"
          title="Name"
          icon="user-alt"
          maxLength={30}
          value={name}
          onChange={onChangeName}
        />

        <Input
          type="email"
          name="email"
          title="Email"
          icon={isEmail ? isEmailValid ? 'check' : 'exclamation-circle' : 'envelope'}
          maxLength={30}
          value={email}
          onChange={onChangeEmail}
        />
      </Group>

      <Group title="Message" detail={message && `${message.length} / 260`}>
        <TextArea
          name="message"
          placeholder="Feedback..."
          maxLength={260}
          value={message}
          onChange={onChangeMessage}
        />
      </Group>

      <Group title="Subscribe">
        <Row
          icon="envelope-open-text"
          title="Email Updates"
          detail={
            <Switch
              name="subscribe"
              onChange={onChangeSubscribe}
              checked={subscribe}
            />
          }
        />
      </Group>
    </Form>
  ) : (
    <Success redirect={() => navigate(action)} />
  )
}
