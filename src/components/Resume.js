import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import resume from '../assets/resume.pdf';

class Resume extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Resume | Helena Makendengue';
    }
    
    render() {
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <div className="content-text">
                        <a className="resume-dl" href={resume}>
                            Download Resume
                        </a>
                        <p>Resume opened in new tab.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Resume;