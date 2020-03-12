import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="content">
                    <div className="about">
                        <h1>STEM Education Advocate 👩🏾‍💻</h1>
                            <br/>
                            <li>volunteering</li>
                            <br/>
                            <br/>
                        <h1>Spider-Man Aficionado 🕸</h1>
                            <br/>
                            <li>ultimate comic</li>
                            <br/>
                            <li>tobey > andrew > tom</li>
                            <br/>
                            <br/>
                        <h1>Playlist Curator 🎵</h1>
                            <br/>
                            <li><a href="https://open.spotify.com/playlist/2Klg4XHwClXafOoiHNCcyi?si=nqdpv-3LQCqUw_0szqo3bg" target="_blank" rel="noopener noreferrer">007FFF</a></li>
                            <br/>
                            <br/>
                        <h1>Fashionista 👗</h1>
                            <br/>
                            <li><a href="https://www.youtube.com/channel/UCvO6uJUVJQ6SrATfsWR5_aA" target="_blank" rel="noopener noreferrer">PAQ</a></li>
                            <br/>
                            <li><a href="https://www.youtube.com/channel/UC5t2Ns8OAS12ig8pAZk9_PA" target="_blank" rel="noopener noreferrer">Internet Girl</a></li>
                            <br/>
                            <li><a href="https://www.youtube.com/channel/UCvkk9KAIk4KBXzJ9wi-II7w" target="_blank" rel="noopener noreferrer">StealTheSpotlight</a></li>
                            <br/>
                            <br/>
                        <h1>Photographer 📷</h1>
                            <br/>
                            <li><a href="https://www.instagram.com/helenatakespictures/" target="_blank" rel="noopener noreferrer">@helenatakespictures</a></li>
                            <br/>
                            <li>take photos for hackgt</li>
                            <br/>
                            <br/>
                        <h1>Filmmaker 🎬</h1>
                            <br/>
                            <li><a href="https://www.youtube.com/watch?v=uFYS3wb34yg" target="_blank" rel="noopener noreferrer">"It's Different" - Campus Movie Fest</a></li>
                            <br/>
                            <li>personal short film projects</li>
                            <br/>
                            <li>machinimas</li>
                            <br/>
                            <br/>
                        <h1>Gamer 🎮</h1>
                            <br/>
                            <li>JRPGS, playstation, playstation access, visual novels, nintendo, sims, puppet combo</li>
                            <br/>
                            <br/>
                        <h1>Content Creator 🛠</h1>
                            <br/>
                            <li>Films, photography, podcasts, video games, music, art, love it all, neil cic, punch up the jam</li>
                            <br/>
                            <li>check out my spotify for <a href="https://open.spotify.com/playlist/2Klg4XHwClXafOoiHNCcyi?si=RYjbKsiwSc6qC3YSVtttfQ" target="_blank" rel="noopener noreferrer">songs that inspire me to create content</a></li>
                            <br/>
                            <li>alien music</li>
                            <br/>
                            <li>pixel affection</li>
                            <br/>
                            <li>sketches</li>
                            <br/>
                            <br/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;