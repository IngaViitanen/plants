import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <NavLink to="/" >LOGO</NavLink>
                </li>
            </ul>
            <StyledUlWrapper>
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/yourPlants" >Your plants</NavLink>
                </li>
                <li>
                    <NavLink to="/about" >About</NavLink>
                </li>
            </StyledUlWrapper>
        </StyledNav>
    )
}

export default Nav

const StyledNav = styled.nav`
  padding: 20px 0;
  position: absolute;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.2px);
  -webkit-backdrop-filter: blur(7.2px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const StyledUlWrapper = styled.ul`
    display: flex;
`