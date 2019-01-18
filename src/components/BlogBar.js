import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Battery from './Battery'
import Time from './Time'

const BlogBar = styled.div`
  display: grid;
  grid-area: blogbar;
  padding: 0 5vh;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  align-self: end;
  height: 10vh;
  font-size: 2vh;
  background-color: white;
  border-bottom: 0.25vh solid ${props => props.theme.colors.black[100]};
  user-select: none;
  color: ${props => props.theme.colors.black[300]};
  border-top-left-radius: 5vh;
  border-top-right-radius: 5vh;
  pointer-events: auto;
  z-index: 1;
`

const BlogLogo = styled(Logo)`
  width: 6vh;
`

const BlogTime = styled(Time)`
  justify-self: start;
  font-weight: 600;
`

const BlogBattery = styled(Battery)`
  justify-self: end;
`
export default props => {
  return (
    <BlogBar>
      <BlogTime />
      <BlogLogo />
      <BlogBattery />
    </BlogBar>
  )
}
