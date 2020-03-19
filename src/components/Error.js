import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

class Error extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavBar/>
                <div className="container">
                    <div className="content">
                        <p>404 - Page Not Found</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Error;