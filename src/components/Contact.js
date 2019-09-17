import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact-style">
                <h1>Contact</h1>
                <div className="contact-pane-holder">
                    <div className="social-media">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/helenahmakendengue/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        {/* Github */}
                        <a href="https://github.com/HelenaMakendengue" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/ladylena1013/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                        {/* Spotify */}
                        <a href="http://bit.ly/spotify-helena" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-spotify" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;