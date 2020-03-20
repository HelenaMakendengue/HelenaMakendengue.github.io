import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../src/styles/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="home-nav-link">
            <NavLink exact to="/" className="nav-link" activeClassName="active-nav">Helena Makendengue</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" className="nav-link" activeClassName="active-nav">About</NavLink>
          </li>
          <li>
            <NavLink exact to="/projects" className="nav-link" activeClassName="active-nav">Projects</NavLink>
          </li>
          <li>
            <NavLink exact to="/resume" className="nav-link" activeClassName="active-nav">Resume</NavLink>
          </li>  
        </ul>
      </div>
    )
  }
}

export default NavBar;
