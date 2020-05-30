import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/Projects.css";

class Videography extends Component {
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
                            <h1>Videography</h1>
                        </div>
                        <div className="project-description">
                            <p>Novice videographer.</p>
                        </div>
                        <br/>
                        <br/>
                        <div className="project-details">
                            <p>no links in particular maybe the YT for campus movie fest <a href="https://instagram.com/helenatakespictures" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        </div>
                        <iframe className="cmf-video" title="cmf-video" width="560" height="315" src="https://www.youtube.com/embed/uFYS3wb34yg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Videography;