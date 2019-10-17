import React, { Component } from 'react';
import helenaImg from '../assets/helena.jpeg';

class Landing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="landing-content">
                <div className="landing-header">
                    <img className="helena-img" src={helenaImg} alt="helena-img"/>
                </div>
                <div className="rectangle">
                    <div className="landing-text">
                        <h1>Helena Makendengue</h1>
                        <br/>
                        <p>I'm a third year CS Major.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;