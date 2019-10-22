import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active-nav">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" className="nav-link" activeClassName="active-nav">About</NavLink>
          </li>
          <li>
            <NavLink exact to="/projects" className="nav-link" activeClassName="active-nav">Projects</NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" className="nav-link" activeClassName="active-nav">Contact</NavLink>
          </li>  
        </ul>
      </div>
    )
  }
}

export default NavBar;
