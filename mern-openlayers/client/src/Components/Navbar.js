import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/StreetLight'>Street Light</NavLink>
      <NavLink to='/CrimeRate'>Crime Rate</NavLink>
    </nav>
  )
}
export default Navbar