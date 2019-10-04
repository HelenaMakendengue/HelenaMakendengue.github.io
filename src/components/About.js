import React, { Component } from 'react';
import aboutImg from '../assets/about1.jpg';

class About extends Component {
    render() {
        return (
            <div className="content">
                <div className="about-style">
                    <h1>About</h1>
                    <div className="about-holder">
                        <img className="about-img" src={aboutImg} alt="about-img"/>
                        <div className="about-text">
                            <p>Howdy! I'm Helena.</p>
                            <br/>
                            <p>3rd Year CS Major @ Georgia Tech</p>
                            <br/>
                            <p>Former Software Engineering Intern @ Asurion</p>
                            <br/>
                            <p>VP for the Women @ College of Computing</p>
                            <br/>
                            <p>Member of HackGT's Operations Team</p>
                            <br/>
                            <p>GT Honors Program Student</p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;