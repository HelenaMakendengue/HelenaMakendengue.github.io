import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Helena Makendengue</h1>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/resume" className="nav-link">Resume</Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>  
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
