import React, { Component } from 'react';
import "../../src/styles/Footer.css";

class Footer extends Component {
    render() {
        const socials = [
            {
                icon: "fa fa-linkedin-square",
                link: "https://www.linkedin.com/in/helenahmakendengue/",
                title: "LinkedIn"
            },
            {
                icon: "fa fa-github-square",
                link: "https://github.com/HelenaMakendengue",
                title: "Github"
            },
            {
                icon: "fa fa-instagram",
                link: "https://www.instagram.com/ladylena1013/",
                title: "Instagram"
            },
            {
                icon: "fa fa-spotify",
                link: "http://bit.ly/spotify-helena",
                title: "Spotify"
            }
        ]
        return (
            <div className="footer">
                <p>let's connect! | © helena makendengue</p>
                <div className="footer-socials">
                    {/* E-Mail */}
                    <a className="E-mail" href="mailto:helenamakens1013@gmail.com">
                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                    </a>
                    {socials.map(socials =>
                        <a key={socials.title} className={socials.title} href={socials.link} target="_blank" rel="noopener noreferrer">
                            <i className={socials.icon} aria-hidden="true"/>
                        </a>
                    )}
                </div>
            </div>
        )
    }
}
export default Footer;