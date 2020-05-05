import React, { Component } from 'react';
import Header from './Header';
import "../../src/styles/Header.css";
import Footer from './Footer';

class Landing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const scrollDown = () => {
            window.scrollTo({
                top: 1000,
                behavior: 'smooth'
            });
        };
        return (
            <div className="container">
                <Header/>
                <div className="content">
                    <button id="scrollDown" onClick={scrollDown}>
                        <i class="fa fa-chevron-down"></i>
                    </button>
                    <div className="content-text">
                        <h1>Greetings and Salutations!</h1>
                        <br/>
                        <p>I'm Helena, a 3rd Year Computer Science Major at the Georgia Institute of Technology with concentrations 
                            in artificial intelligence and media. I’m the Co-President of Women @ College of Computing, a HackGT Organizer 
                            and Operations Member, an Honors Program Student, and former Asurion Software Engineering Intern. I also have a
                            passion for STEM education.
                            <br/>
                            <br/>
                            I’m currently looking for Summer 2020 internship opportunities!
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Landing;