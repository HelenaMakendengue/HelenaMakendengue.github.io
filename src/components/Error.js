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
                <div className="rectangle">
                    <div className="error-text">
                        <p>404 - Page Not Found</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Error;