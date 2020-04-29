import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

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
                    <div className="content-text">
                        <div className="sub-text">
                            <p>
                                Nashville Native, love of video games and edu tech
                                fueled my interest in tech.
                                I'm a <a className="body-link" href="https://www.instagram.com/helenatakespictures/" target="_blank" rel="noopener noreferrer">novice photographer</a>.
                            <br/>
                            <br/>
                                Spotify Playlist Curator
                            <br/>
                            <br/>
                                Spider-Man Aficionado
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;