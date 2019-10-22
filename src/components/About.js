import React, { Component } from 'react';
import IconBox from './IconBox';

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {

        const icons = [
            {
                icon: "👩🏾‍💻",
                title: "I'm a 3rd Year CS Major!",
                description: "I'm a 3rd Year CS Major at Tech blah blah..."
            },
            {
                icon: "🎵",
                title: "Check out my latest jams!",
                description: "Check out my latest jams on spotify blah blah..."
            },
            {
                icon: "📷",
                title: "I'm into photography!",
                description: "I'm into photography blah blah..."
            },
            {
                icon: "🎬",
                title: "I like making machinimas!",
                description: "I like making machinimas blah blah..."
            },
            {
                icon: "🎮",
                title: "I love JRPGs!",
                description: "I love JRPGs blah blah..."
            },
            {
                icon: "👟",
                title: "I'm into fashion!",
                description: "I'm into fashion blah blah..."
            }

        ]

        return (
            <div className="about-content">
                <div className="about-header">
                    <p>Hello!</p>
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