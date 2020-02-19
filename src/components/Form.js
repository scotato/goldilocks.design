import React, { useRef, useState, useEffect } from 'react'
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

  &:focus {
    outline: none;
    border-color: ${props => props.theme.color.info};
  }
`

const encode = data => Object
  .keys(data)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join("&")

export default props => {
  const form = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subscribe, setSubscribe] = useState(false)
  const [posts, setPosts] = useState(false)
  const [projects, setProjects] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onChangeName = event => setName(event.target.value)
  const onChangeEmail = event => setEmail(event.target.value)
  const onChangeMessage = event => setMessage(event.target.value)
  const onChangeSubscribe = event => subscribeAll(!subscribe)
  
  const onChangePosts = event => posts && !projects
    ? subscribeAll(false)
    : setPosts(!posts)

  const onChangeProjects = event => !posts && projects
    ? subscribeAll(false)
    : setProjects(!projects)

  const subscribeAll = val => {
    setSubscribe(val)
    setPosts(val)
    setProjects(val)
  }
  
  const onSubmit = event => {
    const state = { name, email, message, subscribe, posts, projects }
    setIsSubmitting(true)
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.current.getAttribute("name"),
        ...state
      })
    })
    .then(() => props.navigate(form.current.getAttribute("action")))
    .catch(error => {
      setIsSubmitting(false)
      alert(error)
    })

    event && event.preventDefault()
  }

  const isSubscribing = posts || projects
  const isEmail = email.length
  const isEmailValid = isemail.validate(email)
  const canSubmitEmail = !isEmail || isEmailValid
  const canSubmitMessage = message.length > 10
  const canSubscribe = !isSubscribing || (isSubscribing && isEmailValid)
  const canSubmit = !isSubmitting && canSubmitMessage && canSubmitEmail && canSubscribe
  
  useEffect(() => {
    props.setSubmitButton(
      <ButtonText disabled={!canSubmit} onClick={onSubmit}>Submit</ButtonText>
    )
  }, [name, email, message, subscribe, posts, projects])

  return (
    <Form
      name={props.action}
      action={props.action}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      ref={form}
    >
      <Hidden>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
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
          type="text"
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

        <Row
          icon="pen-alt"
          title="Post Updates"
          hidden={!subscribe}
          detail={
            <Switch
              name="subscribePosts"
              onChange={onChangePosts}
              checked={posts}
            />
          }
        />

        <Row
          icon="pencil-ruler"
          title="Project Updates"
          hidden={!subscribe}
          detail={
            <Switch
              name="subscribeProjects"
              onChange={onChangeProjects}
              checked={projects}
            />
          }
        />
      </Group>
    </Form>
  )
}
