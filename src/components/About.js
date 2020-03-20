import React, { Component } from 'react';
import NavBar from './NavBar';
import Carousel from './Carousel';
import Footer from './Footer';

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <div className="content-text">
                        <Carousel/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;