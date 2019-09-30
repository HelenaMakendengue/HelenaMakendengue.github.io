import React, { Component } from 'react';
import aboutImg from '../assets/crop.jpg';

class About extends Component {
    render() {
        return (
            <div className="content">
                <div className="about-style">
                    <h1>About</h1>
                    <div className="about-holder">
                        <img src={aboutImg} alt="about-img"/>
                        <div className="about-text">
                            <p>Howdy! My name is Helena.</p>
                            <br/>
                            <p>I'm a 3rd Year CS Major @ Georgia Tech.</p>
                            <br/>
                            <p>I'm the VP for the Women @ College of Computing.</p>
                            <br/>
                            <p>I'm a member of HackGT's Operations Team.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;