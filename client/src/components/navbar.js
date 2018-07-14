import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
 
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
    <img src='./image/DreamElements2.jpg' style={{ paddingLeft: 0, paddingRight: 10 }} width="100" height="100"/>
  
    <NavLink className="navbar-brand" to="/">Dream Elements IT</NavLink>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Product and Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Customer Login</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar;