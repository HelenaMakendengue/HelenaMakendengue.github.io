import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/Projects.css";

class ARMRI extends Component {
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
                            <h1>Augmented Reality MRI</h1>
                        </div>
                        <div className="project-description">
                            <p>Programmed an augmented reality MRI game using C#, the Microsoft Face API, and a Microsoft Kinect for Windows, to help facilitate the learning of human anatomy for grades K-12. Authored a research paper titled “Interfacing the Microsoft Face API and Kinect for Windows to Create a Personalized, Augmented Reality MRI" published by Vanderbilt University’s Young Scientist Journal (May 2017 issue)</p>
                        </div>
                        <br/>
                        <br/>
                        <div className="project-details">
                            <p>View the paper <a href="https://wp0.vanderbilt.edu/youngscientistjournal/article/interfacing-the-microsoft-face-api-and-kinect-for-windows-to-create-a-personalized-augmented-reality-mri-mirror" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ARMRI;