import React from 'react'
import Plants from './Plants'
import styled from 'styled-components'

const Home = () => {
    return (
        <>
            <StyledHeader className='home-header'>
                <h1>Some inspirational and welcoming text</h1>
            </StyledHeader>
            <Plants />
        </>
    )
}

export default Home

const StyledHeader = styled.header`
  background: url('/images/plants_bg.jpg') center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`