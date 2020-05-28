import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/Projects.css";

class PersonalWebsite extends Component {
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
                            <h1>helenamakendengue.github.io</h1>
                        </div>
                        <div className="project-description">
                            <p><a href="https://helenamakendengue.github.io">helenamakendengue.github.io</a> is my personal website I created using HTML, CS, Javascript, and React. There have been various builds and I am still leanring and improving my skills in order to create a final product I am proud of.</p>
                        </div>
                        <br/>
                        <br/>
                        <div className="project-details">
                            <p>View the source code on my github at <a href="https://github.com/HelenaMakendengue/HelenaMakendengue.github.io" target="_blank" rel="noopener noreferrer">github.com/HelenaMakendengue</a>.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PersonalWebsite;