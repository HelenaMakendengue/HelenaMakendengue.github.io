import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

class Projects extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        // const projects = [
        //     {
                
        //     },
        //     {
                
        //     },
        //     {
                
        //     },
        //     {
                
        //     }
        // ]



        return (
            <div>
                <Header/>
                <NavBar/>
                <div className="rectangle">
                    <div className="error-text">
                        <p>Coming soon!</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Projects;

