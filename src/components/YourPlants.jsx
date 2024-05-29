import React from 'react'
import styled from 'styled-components'

const YourPlants = () => {
    return (
        <StyledWrapper>
            <h1>Your plants</h1>
        </StyledWrapper>
    )
}

export default YourPlants

const StyledWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`