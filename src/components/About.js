import React, { Component } from 'react';
import helenaImg from '../assets/helena.jpeg';
import IconBox from './IconBox';

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {

        const icons = [
            {
                icon: "👩🏾‍💻",
                description: "I'm a 3rd Year CS Major!"
            },
            {
                icon: "🎵",
                description: "Check out my latest jams!"
            },
            {
                icon: "👠",
                description: "I'm into fashion!"
            },
            {
                icon: "📷",
                description: "I'm into photography!"
            },
            {
                icon: "🎬",
                description: "I like making machinimas!"
            },
            {
                icon: "🎮",
                description: "I love JRPGs!"
            },

        ]

        return (
            <div className="about-content">
                <div className="about-header">
                    <img className="helena-img" src={helenaImg} alt="helena-img"/>
                </div>
                <div className="rectangle">
                    <div className="about-text">
                        {icons.map(icons =>
                            <IconBox className="icon-box" icon={icons.icon} 
                            title={icons.title} description={icons.description}/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default About;