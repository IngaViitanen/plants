import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" >LOGO</NavLink>
                </li>
            </ul>
            <ul className='nav-links'>
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/yourPlants" >Your Plants</NavLink>
                </li>
                <li>
                    <NavLink to="/about" >About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav