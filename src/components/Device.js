import React from 'react'
import styled from 'styled-components'
import { BlobAnimated } from './Blob'

const Device = styled.div`
  display: grid;
  position: relative;
  grid-area: layout-body;
  grid-template-rows: 64px auto 64px;
  background-color: ${props => props.theme.colors.black[100]};
  box-shadow: 0 1vh 5vh rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.theme.size.layout[300]};
`

const DeviceHeader = styled.header`
  display: grid;
  padding: 8px 48px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.black[200]};
`

const DeviceHeaderNav = styled.nav`
`

const DeviceHeaderIcon = styled.div`
  place-self: center;
  width: 48px;
  height: 48px;
  background-color: ${props => props.theme.colors.black[200]};
`

const DeviceHeaderAction = styled.div`
  place-self: center end;
`

const DeviceBody = styled.main`
  padding: 64px 128px;
`

const DeviceFooter = styled.footer`
`

const DeviceBackground = styled.div`
  position: fixed;
  top: 0;
  left:0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.black[100]};
  pointer-events: none;
`

export default ({children, ...props}) => (
  <>
    <DeviceBackground>
      <BlobAnimated />
    </DeviceBackground>
    <Device {...props}>
      <DeviceHeader>
        <DeviceHeaderNav>a</DeviceHeaderNav>
        <DeviceHeaderIcon />
        <DeviceHeaderAction>c</DeviceHeaderAction>
      </DeviceHeader>
      <DeviceBody>
        {children}
      </DeviceBody>
      <DeviceFooter />
    </Device>
  </>
)
