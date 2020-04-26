import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../src/styles/NavBar.css";
import resume from '../assets/resume.pdf';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="home-nav-link">
            <NavLink exact to="/" className="nav-link" activeClassName="active-nav">HELENA</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" className="nav-link" activeClassName="active-nav">about</NavLink>
          </li>
          <li>
            <NavLink exact to="/projects" className="nav-link" activeClassName="active-nav">projects</NavLink>
          </li>  
          <li>
            <a className="resume-dl" href={resume}>ResumeTest</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
