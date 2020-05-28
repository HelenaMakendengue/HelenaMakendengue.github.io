import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import "../../src/styles/About.css";
import aboutPic from "../assets/helena3.jpeg"

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'About | Helena Makendengue';
    }
    render() {
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <img className="about-pic" src={aboutPic} alt="Helena's Headshot"/>
                    <div className="about-text">
                        <p>
                            Helena H. Makendengue is a fourth-year Computer Science Major at the Georgia Institute of Technology with concentrations in (Artificial) Intelligence and Media. 
                            <br/>
                            <br/>
                            She is the Co-President of <a href="https://women.cc.gatech.edu/" target="_blank" rel="noopener noreferrer">Women @ College of Computing</a> Georgia Tech, a <a href="https://hack.gt/" target="_blank" rel="noopener noreferrer">HackGT</a> Organizer and Operations Member, and an Honors Program student.
                            <br/>
                            <br/>
                            This summer she is a fellow of the Major League Hacking Fellowship powered by Github and is a former software engineering intern at Asurion.
                            <br/>
                            <br/>
                            In her free time she enjoys developing her skills as a photographer and video editor.
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;