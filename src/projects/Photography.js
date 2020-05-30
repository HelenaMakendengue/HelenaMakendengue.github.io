import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/Projects.css";
import ashleighPic from "../assets/helenatakespictures/030120-ashleigh.JPG"
import shelbyPic from "../assets/helenatakespictures/020720-shelby.JPG"
import mayPic from "../assets/helenatakespictures/111619-may.JPG"
import davisPic from "../assets/helenatakespictures/110919-davis.JPG"

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
                    <div className="photography-images">
                        <img className="ashleigh-pic" src={ashleighPic} alt="Portrait of Ashleigh"/>
                        <img className="shelby-pic" src={shelbyPic} alt="Portrait of Shelby"/>
                        <img className="may-pic" src={mayPic} alt="Portrait of May"/>
                        <img className="davis-pic" src={davisPic} alt="Portrait of Davis"/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Photography;