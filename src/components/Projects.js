import React, { Component } from 'react';

class Projects extends Component {

    render() {

        const projects = [
            {
                title: "Leonardo",
                description: "Leo",
                image: "Katana",
                type: "mobile",
                link: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            },
            {
                title: "Leonardo",
                description: "Leo",
                image: "Katana",
                type: "mobile",
                link: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            },
            {
                title: "Leonardo",
                description: "Leo",
                image: "Katana",
                type: "mobile",
                link: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            },
            {
                title: "Leonardo",
                description: "Leo",
                image: "Katana",
                type: "mobile",
                link: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            }
        ]

        return (
            <div className="content">
                <div className="projects-style">
                    <h1>Projects</h1>
                    <hr/>
                    {projects.map(projects =>
                        <div>
                            <hr/>
                            <h3>{projects.title}</h3>
                            <p>{projects.description}</p>
                            <img src={projects.link} alt={`${projects.title}`} width="200"/>
                            <hr/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Projects;

