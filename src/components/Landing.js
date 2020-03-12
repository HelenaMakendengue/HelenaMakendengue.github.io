import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Landing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="content">
                    <h1>Greetings and Salutations!</h1>
                    <br/>
                    <p>I'm Helena, a 3rd Year Computer Science Major at the Georgia Institute of Technology with concentrations 
                        in artificial intelligence and media. I’m the Co-President of Women @ College of Computing, a HackGT Organizer 
                        and Operations Member, an Honors Program Student, and former Asurion Software Engineering Intern.
                        <br/>
                        <br/>
                        I’m currently looking for Summer 2020 internships opportunities!
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Landing;