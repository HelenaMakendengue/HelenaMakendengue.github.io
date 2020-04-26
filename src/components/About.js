import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'About | Helena Makendengue';
    }
    render() {
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <div className="content-text">
                        <div className="sub-text">
                            <p>
                                WIP...
                            <br/>
                            <br/>
                                Helena Makendengue is a 4th year computer science undergrad at the 
                                Georgia Institute of Technology in Atlanta, Georgia.
                            <br/>
                            <br/>
                                She is the Co-President of the Women @ College of Computing Georgia Tech and
                                a HackGT organizer and operations member.
                            <br/>
                            <br/>
                                In her spare time, Helena can be found practicing photography.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;