import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import errorImg from '../assets/beavis2.gif';

class Error extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <NavBar/>
                    <div className="content">
                        <h1 className="error">404 Page Not Found</h1>
                        <img className="error-img" src={errorImg} alt="beavis pounds keyboard"/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Error;