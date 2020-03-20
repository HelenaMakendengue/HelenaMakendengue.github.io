import React, { Component } from 'react';
import NavBar from './NavBar';
import "../../src/styles/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar/>
            </div>
        )
    }
}

export default Header;