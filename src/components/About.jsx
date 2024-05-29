import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <StyledWrapper>
        <h1>About</h1>
    </StyledWrapper>
  )
}

export default About

const StyledWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`