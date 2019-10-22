import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import helenaImg from '../assets/helena.jpeg';

class Landing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="rectangle">
                    <div className="landing-text">
                        <img src={helenaImg} alt="helena-img"/>
                        <p>Howdy, I'm Helena!</p>
                        <p>A 3rd Year Computer Science Major at Georgia Tech</p>
                        <p>Vice President of Women @ College of Computing</p>
                        <p>HackGT Organizer & Operations Member</p>
                        <p>Honors Program Student</p>
                        <p>Former Asurion Software Engineering Intern</p>
                        <p>I’m currently looking for Summer 2020 internships opportunities!</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Landing;