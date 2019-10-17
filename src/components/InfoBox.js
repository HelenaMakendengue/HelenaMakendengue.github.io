import React, { Component } from 'react';

class InfoBox extends Component {
    render() {
        return (
            <div className="info-box">
                <a className="info-icon" href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <i className={this.props.icon} aria-hidden="true"/>
                </a>
                <div className="info-text">
                    <p>{this.props.title}</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default InfoBox;