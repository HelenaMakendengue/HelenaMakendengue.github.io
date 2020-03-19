import React, { Component } from 'react';
import NavBar from './NavBar';
import Slider from './Slider';
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
                    <Slider/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;