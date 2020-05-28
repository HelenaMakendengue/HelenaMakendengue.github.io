import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/Projects.css";

class WACC extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Experience | Helena Makendengue';
    }
    render() {
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <div className="project-header">
                        <div className="project-title">
                            <h1>Women @ College of Computing</h1>
                        </div>
                        <div className="project-description">
                            <p>Organizing and leading weekly meetings, from company talks to the development of professional and technical skills, and organizing and promoting mentorship and external CS related opportunities for female-identifying CS majors on Georgia Tech’s campus</p>
                        </div>
                        <br/>
                        <br/>
                        <div className="project-details">
                            <p>View the website <a href="https://women.cc.gatech.edu/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default WACC;