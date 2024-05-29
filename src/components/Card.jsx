import React from 'react'
import styled from 'styled-components'

const Card = () => {
  return (
    <StyledSection>
        <img src="/images/plants_bg.jpg" alt="plant" height="200px" />
        <h1>Plant name</h1>
        <button>{"<3 save"}</button>
        <p>Watering: </p>
        <p>Sunligt: </p>
    </StyledSection>
  )
}

export default Card

const StyledSection = styled.section`
    background-color: #333;
    width: 400px;
    height: 500px;
    margin: 1rem;
    padding: 1rem;
    border-radius: 15px;
`