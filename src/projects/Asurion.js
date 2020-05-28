import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/Projects.css";

class Asurion extends Component {
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
                            <h1>Asurion SWE Intern</h1>
                        </div>
                        <div className="project-description">
                            <p>Refactored a full-stack web application for Sprint customers, using React that allows them to diagnose and review phone battery related issues and advice using decision tree logic based on customer input.</p>
                        </div>
                        <br/>
                        <br/>
                        <div className="project-details">
                            <p>View the website <a href="https://sprint.techcheckup.co/battery/battery_root" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Asurion;