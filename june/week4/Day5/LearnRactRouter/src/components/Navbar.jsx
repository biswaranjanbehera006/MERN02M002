import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="byId/:30">Fetch Id</Link> */}

      <NavLink to="/" style={({isActive})=>({color:isActive?"red":""})}>Home</NavLink> &nbsp;  
      <NavLink to="/about" style={({isActive})=>({color:isActive?"red":""})}>About</NavLink> &nbsp; 
      <NavLink to="/service" style={({isActive})=>({color:isActive?"red":""})}>Service</NavLink> &nbsp; 
      <NavLink to="/contact" style={({isActive})=>({color:isActive?"red":""})}>Contact</NavLink> &nbsp; 
      <NavLink to="/login" style={({isActive})=>({color:isActive?"red":""})}>Login</NavLink> &nbsp; 
      <NavLink to="/register" style={({isActive})=>({color:isActive?"red":""})}>Register</NavLink> &nbsp; 


    </div>
  )
}

export default Navbar
