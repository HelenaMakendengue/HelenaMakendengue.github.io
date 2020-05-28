import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/Projects.css";

class Photography extends Component {
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
                            <h1>Photography</h1>
                        </div>
                        <div className="project-description">
                            <p>Novice photographer.</p>
                        </div>
                        <br/>
                        <br/>
                        <div className="project-details">
                            <p>View my instagram <a href="https://instagram.com/helenatakespictures" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Photography;