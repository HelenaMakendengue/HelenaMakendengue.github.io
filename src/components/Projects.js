import React, { Component } from 'react';
import NavBar from './NavBar';
import InfoBox from './InfoBox'
import Footer from './Footer';

class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const projects = [
            {
                image: "website.png",
                title: "helenamakendengue.github.io",
                byline: "Created by me",
                description: "My personal website!",
                link: "https://helenamakendengue.github.io/#/",
                linkName: "You're here right now!"
            },
            {
                image: "sprint.png",
                title: "Sprint Tech Check Up",
                byline: "Soluto @ Asurion",
                description: "Refactored a full-stack web application for Sprint customers, using React that allows them to diagnose and review phone battery related issues and advice using decision tree logic based on customer input",
                link: "https://sprint.techcheckup.co/battery/battery_root",
                linkName: "Find the website here!"
            },
            {
                image: "armri.png",
                title: "Augmented Reality MRI",
                byline: "Medical-image Analysis & Statistical Interpretation Lab @ Vanderbilt University",
                description: "Programmed an augmented reality MRI game using C#, the Microsoft Face API, and a Microsoft Kinect for Windows, to help facilitate the learning of human anatomy for grades K-12. Authored a research paper titled “Interfacing the Microsoft Face API and Kinect for Windows to Create a Personalized, Augmented Reality MRI” published by Vanderbilt University’s Young Scientist Journal (May 2017 issue)",
                link: "https://vimeo.com/173657548",
                linkName: "Click here for a video demo!"
            }
        ]
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <div className="content-text">
                        {projects.map(projects =>
                                <InfoBox key={projects.title} image={projects.image} title={projects.title} byline={projects.byline} 
                                description={projects.description} link={projects.link} linkName={projects.linkName}/>
                        )}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Projects;

