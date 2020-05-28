import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/Projects.css";

class HackGT extends Component {
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
                            <h1>HackGT</h1>
                        </div>
                        <div className="project-description">
                            <p>Organizing a variety of CS-related technical, outreach, and social events for the Georgia Tech and Atlanta communities in addition to Georgia Tech’s annual hackathon, HackGT, one of the largest US collegiate hackathons.</p>
                        </div>
                        <br/>
                        <br/>
                        <div className="project-details">
                            <p>View the website <a href="https://hack.gt" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default HackGT;