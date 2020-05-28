import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import "../../src/styles/Landing.css";

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
                    <div className="landing-text">
                        <p>experience</p>
                        <br/>
                        <ul>
                            <a href="http://localhost:3000/#/helenamakendengue-github-io">
                                helenamakendengue.github.io
                            </a>
                        </ul>
                        <ul>
                            <a href="http://localhost:3000/#/asurion">
                                asurion software engineering intern
                            </a>
                        </ul>
                        <ul>
                            <a href="http://localhost:3000/#/ar-mri">
                                augmented reality mri
                            </a>
                        </ul>
                        <ul>
                            <a href="http://localhost:3000/#/women-at-cc">
                                co-president of women @ college of computing
                            </a>
                        </ul>
                        <ul>
                            <a href="http://localhost:3000/#/hack-gt">
                                hackgt organizer and operations member
                            </a>
                        </ul>
                        <ul>
                            <a href="http://localhost:3000/#/photography">
                                photography
                            </a>
                        </ul>
                        <ul>
                            <a href="http://localhost:3000/#/videography">
                                videography
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