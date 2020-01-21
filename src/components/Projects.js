import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

class Projects extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        const projects = [
            {
                title: "FlappyBird",
                description: "A basic flappy bird game created in #C using Unity",
                type: "unity",
                image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            },
            {
                title: "GT Opportunists",
                description: "An Android application that will allow GT students to track and find free food and swag on campus",
                type: "mobile",
                image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            },
            {
                title: "Donation Tracker",
                description: "An Android application allowing non-profit organizations to track donations and distributions",
                type: "mobile",
                image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            },
            {
                title: "Leonardo",
                description: "Leo",
                type: "mobile",
                image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            }
        ]



        return (
            <div>
                <Header/>
                <NavBar/>
                <div className="rectangle">
                    <div className="project-text">
                        {projects.map(projects =>
                            <div>
                                <h3>{projects.title}</h3>
                                <img src={projects.image} alt={`${projects.title}`} width="200"/>
                                <p>{projects.description}</p>
                            </div>
                        )}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Projects;

