import React, { Component } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className="container">
                <NavBar/>
                <div className="content">
                    <h1>STEM Education 👩🏾‍💻</h1>
                        <br/>
                        <li>Volunteering</li>
                        <br/>
                        <br/>
                    <h1>Obsessed With Spider-Man 🕸</h1>
                        <br/>
                        <li>ultimate comic, tobey > andrew > tom</li>
                        <br/>
                        <br/>
                    <h1>Love Making Playlists 🎵</h1>
                        <br/>
                        <li><a href="https://open.spotify.com/playlist/1o2HgQALTy0TfKISkUSSFJ?si=zkWDiPG_SzWDz8Q7ElchRA" target="_blank" rel="noopener noreferrer">current obsessions</a></li>
                        <br/>
                        <br/>
                    <h1>Fashion 👗</h1>
                        <br/>
                        <li>PAQ, StealtheSpotlight, internetgirl</li>
                        <br/>
                        <br/>
                    <h1>Novice Photographer 📷</h1>
                        <br/>
                        <li>check out my instagram, take photos for hackgt</li>
                        <br/>
                        <br/>
                    <h1>Filmmaking 🎬</h1>
                        <br/>
                        <li>Films, photography, podcasts, music</li>
                        <br/>
                        <br/>
                    <h1>Video Games 🎮</h1>
                        <br/>
                        <li>JRPGS, playstation, playstation access, visual novels, nintendo, sims, puppet combo</li>
                        <br/>
                        <br/>
                    <h1>Bullet Journaling 📓</h1>
                        <br/>
                        <li>Yep. One of those girls.</li>
                        <br/>
                        <br/>
                    <h1>Content Creation 🛠</h1>
                        <br/>
                        <li>Films, photography, podcasts, video games, music, art, love it all, neil cic, punch up the jam</li>
                        <br/>
                        <li>check out my spotify for <a href="https://open.spotify.com/playlist/2Klg4XHwClXafOoiHNCcyi?si=RYjbKsiwSc6qC3YSVtttfQ" target="_blank" rel="noopener noreferrer">songs that inspire me to create content</a></li>
                        <br/>
                        <br/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;