import React, { Component } from 'react';
import helenaImg from '../assets/helena.jpeg';
import InfoBox from './InfoBox';

class Contact extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {

        const socials = [
            {
                icon: "fa fa-linkedin-square",
                link: "https://www.linkedin.com/in/helenahmakendengue/",
                title: "LinkedIn",
                description: "Become a part of my network!"
            },
            {
                icon: "fa fa-github-square",
                link: "https://github.com/HelenaMakendengue",
                title: "GitHub",
                description: "Check out some of my personal projects!"
            },
            {
                icon: "fa fa-instagram",
                link: "https://www.instagram.com/ladylena1013/",
                title: "Instagram",
                description: "See my latest CS related escapades!"
            },
            {
                icon: "fa fa-spotify",
                link: "http://bit.ly/spotify-helena",
                title: "Spotify",
                description: "Follow me and check out some of the things I jam to!"
            }
        ]

        return (
            <div className="contact-content">
                <div className="contact-header">
                    <img className="helena-img" src={helenaImg} alt="helena-img"/>
                </div>
                <div className="rectangle">
                    <div className="contact-text">
                        {/* E-Mail */}
                        <div className="info-box">
                            <a className="info-icon" href="mailto:helenamakens1013@gmail.com">
                                <i className="fa fa-envelope-square" aria-hidden="true"/>
                            </a>
                            <div className="info-text">
                                <p>E-Mail</p>
                                <p>Send me a message over the interwebz!</p>
                            </div>
                        </div>
                        {socials.map(socials =>
                            <InfoBox className="info-box" link={socials.link} icon={socials.icon} 
                            title={socials.title} description={socials.description}/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;