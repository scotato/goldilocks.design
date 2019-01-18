import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { ButtonIcon } from './Button'
import { AvatarUser } from './Avatar'
import Input from './Input'

const UserBarContainer = styled.div`
  display: grid;
  padding: 0 2.5vh;
  grid-area: userbar;
  ${props => props.primaryGrid
    ? css`
      grid-template-columns: 5vh 5vh 5vh auto 5vh;
    ` : css`
      grid-auto-columns: 5vh;
      grid-auto-flow: column;
    `
  }
  grid-template-rows: 5vh;
  place-content: center;
  justify-content: stretch;
  height: 10vh;
  font-size: 2.5vh;
  background-color: ${props => props.theme.colors.black[100]};
  grid-column-gap: 1.25vh;
  font-weight: 300;
  color: ${props => props.theme.colors.black[300]};
  border-bottom-left-radius: 5vh;
  border-bottom-right-radius: 5vh;
  pointer-events: auto;
  z-index: 1;
`

const Form = styled.form`
  
`

export default class UserBar extends Component {
  state = {
    activeButton: 'message',
    messageValue: '',
    newsletterValue: '',
    responseNewsletter: null
  }

  isButtonActive = button => button === this.state.activeButton
  setActiveButton = activeButton => this.setState({ activeButton })

  handleSubmitMessage = e => {
    e.preventDefault()
    console.log(this.state.messageValue)
    this.setState({ messageValue: '' })
  }
  
  handleSubmitNewsletter = async (e) => {
    e.preventDefault()
    // const responseNewsletter = await addToMailchimp(this.state.inputValue)
    this.setState({
      // responseNewsletter,
      newsletterValue: ''
    })
  }

  render () {
    return (
      <UserBarContainer primaryGrid={this.state.activeButton !== 'more'}>
        {this.state.activeButton !== 'more' ? (
          <>
            <ButtonIcon
              id="more"
              icon="ellipsis-h"
              isActive={this.isButtonActive('more')}
              onClick={() => this.setActiveButton('more')}
            />
            <ButtonIcon
              id="newsletter"
              icon="envelope"
              isActive={this.isButtonActive('newsletter')}
              onClick={() => this.setActiveButton('newsletter')}
            />
            <ButtonIcon
              id="message"
              icon="comment"
              isActive={this.isButtonActive('message')}
              onClick={() => this.setActiveButton('message')}
            />
            {this.state.activeButton === 'message' && (
              <Form onSubmit={this.handleSubmitMessage}>
                <Input
                  placeholder="message..."
                  value={this.state.messageValue}
                  onChange={e => this.setState({ messageValue: e.target.value })}
                />
              </Form>
            )}

            {this.state.activeButton === 'newsletter' && (
              <Form onSubmit={this.handleSubmitNewsletter}>
                <Input
                  placeholder="enter your email for updates"
                  type="email"
                  value={this.state.newsletterValue}
                  onChange={e => this.setState({ newsletterValue: e.target.value })}
                  autoFocus
                />
              </Form>
            )}
            <AvatarUser />
          </>
        ) : (
          <>
            <ButtonIcon
              id="close"
              icon="times"
              onClick={() => this.setActiveButton('message')}
            />
            <ButtonIcon
              id="twitter"
              icon={['fab', 'twitter']}
              backgroundColor='#1da1f2'
              onClick={() => window.open('https://twitter.com/scotato')}
            />
            <ButtonIcon
              id="github"
              icon={['fab', 'github']}
              backgroundColor='#333333'
              onClick={() => window.open('https://github.com/scotato/goldilocks.design')}
            />
            <ButtonIcon
              id="spotify"
              icon={['fab', 'spotify']}
              backgroundColor='#1db954'
              onClick={() => window.open('https://open.spotify.com/user/wsdodge/playlist/3MYiW7kPg4VSbi2c4FQDuk?si=hOeTuMFhR7-VGDflGL-Uzw')}
            />
          </>
        )}
      </UserBarContainer>
    )
  }
}
