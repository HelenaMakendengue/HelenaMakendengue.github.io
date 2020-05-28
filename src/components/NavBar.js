import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../src/styles/NavBar.css";
import resume from '../assets/resume.pdf';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="nav-list">
          <div className="main-link">
            <li>
              <NavLink exact to="/" className="home-nav-link" activeClassName="active-nav">HELENA</NavLink>
            </li>
          </div>
          <div className="sub-links">
            <li>
              <NavLink exact to="/about" className="about-nav-link" activeClassName="active-nav">about</NavLink>
            </li>
            <li>
              <a href={resume} className="resume-nav-link" target="_blank" rel="noopener noreferrer">resume</a>
            </li>
          </div>
        </ul>
      </div>
    )
  }
}

export default NavBar;
