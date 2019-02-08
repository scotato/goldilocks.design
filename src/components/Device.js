import React from 'react'
import styled from 'styled-components'
import { BlobAnimated } from './Blob'

const Device = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: layout-body;
  position: relative;
  background-color: ${props => props.theme.colors.black[100]};
  box-shadow: 0 ${props => props.theme.size.layout[200]} ${props => props.theme.size.layout[400]} rgba(0, 0, 0, 0.075);
  border-radius: ${props => props.theme.size.layout[400]};
`

const DeviceHeader = styled.header`
  display: grid;
  padding: ${props => `${props.theme.size.layout[200]} ${props.theme.size.layout[400]}`};
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.black[200]};
  color: ${props => props.theme.colors.black[400]};
`

const DeviceHeaderNav = styled.nav`
  display: flex;
  align-items: stretch;
  height: ${props => `${props.theme.size.layout[350]}`};
`

const DeviceHeaderIcon = styled.div`
  height: ${props => `${props.theme.size.layout[450]}`};
  justify-self: center;
`

const DeviceHeaderAction = styled.div`
  height: ${props => `${props.theme.size.layout[450]}`};
  justify-self: end;
`

const DeviceBody = styled.main`
  padding: ${props => `${props.theme.size.layout[500]} ${props.theme.size.layout[600]}`};
  flex-grow: 1;
`

const DeviceFooter = styled.footer`
`

const DeviceBackground = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  border-top: ${props => props.theme.size.layout[100]} solid ${props => props.color};
  background-color: ${props => props.theme.colors.black[100]};
  pointer-events: none;
`

const DeviceBackgroundBlob = styled(BlobAnimated)`
  height: ${props => props.theme.size.layout[600]};
`

export default ({children, headerNav, headerIcon, headerAction, footer, color, ...props}) => {
  const hasHeader = headerNav || headerIcon || headerAction && true
  const hasFooter = footer && true

  return (
    <>
      <DeviceBackground color={color}>
        <DeviceBackgroundBlob color={color} />
      </DeviceBackground>
      <Device {...props}>
        {hasHeader && (
          <DeviceHeader>
            <DeviceHeaderNav>{headerNav}</DeviceHeaderNav>
            <DeviceHeaderIcon>{headerIcon}</DeviceHeaderIcon>
            <DeviceHeaderAction>{headerAction}</DeviceHeaderAction>
          </DeviceHeader>
        )}
        <DeviceBody>
          {children}
        </DeviceBody>
        {hasFooter && (
          <DeviceFooter>
            {footer}
          </DeviceFooter>
        )}
      </Device>
    </>
  )
  
}
