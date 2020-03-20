import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import resume from '../assets/resume.pdf';

class Resume extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <div className="content-text">
                        <a className="resume-dl" href={resume} download="Helena_Makendengue_Resume_2020">
                            Download Resume
                        </a>
                        <iframe className="resume" title="resume" frameBorder="0" src={resume}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Resume;