import React, { Component } from 'react';
import NavBar from './NavBar';
import "../../src/styles/Header.css";
import Footer from './Footer';

class Landing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <div className="content-text">
                        <h1>greetings and salutations!</h1>
                        <br/>
                        <ul>3rd year @ georgia institute of technology</ul>
                        <ul>computer science major, artificial intelligence and media</ul>
                        <ul>co-president of women @ college of computing</ul>
                        <ul>hackgt organizer and operations member</ul>
                        <ul>honors program student</ul>
                        <ul>former asurion software engineering intern</ul>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Landing;