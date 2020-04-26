import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Projects | Helena Makendengue';
    }
    render() {
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <div className="content-text">
                        <div className="sub-text">
                            <p>WIP...</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Projects;

