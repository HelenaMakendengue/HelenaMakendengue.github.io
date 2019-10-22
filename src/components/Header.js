import React, { Component } from 'react';
import headerImg from '../assets/header1.jpg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="https://helenamakendengue.github.io/#/"> Helena Makendengue </a>
                <img src={headerImg} alt="header-img"/>
            </div>
        )
    }
}

export default Header;