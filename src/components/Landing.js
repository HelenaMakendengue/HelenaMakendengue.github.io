import React, { Component } from 'react';
import NavBar from './NavBar';
import "../../src/styles/Header.css";
import Footer from './Footer';

class Landing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Helena Makendengue';
    }

    render() {
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <div className="content-text">
                        <h1>greetings and salutations!</h1>
                        <br/>
                        <ul>
                            <a href="https://www.gatech.edu" target="_blank" rel="noopener noreferrer">
                                4th year @ georgia institute of technology
                            </a>
                        </ul>
                        <ul>
                            <a href="https://www.cc.gatech.edu" target="_blank" rel="noopener noreferrer">
                                computer science major, artificial intelligence and media
                            </a>
                        </ul>
                        <ul>
                            <a href="https://www.asurion.com" target="_blank" rel="noopener noreferrer">
                                former asurion software engineering intern
                            </a>
                        </ul>
                        <ul>
                            <a href="https://women.cc.gatech.edu/index.html" target="_blank" rel="noopener noreferrer">
                                co-president of women @ college of computing
                            </a>
                        </ul>
                        <ul>
                            <a href="https://hack.gt" target="_blank" rel="noopener noreferrer">
                                hackgt organizer and operations member
                            </a>
                        </ul>
                        <ul>
                            <a href="http://honorsprogram.gatech.edu" target="_blank" rel="noopener noreferrer">
                                honors program student
                            </a>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Landing;