import React, { Component } from 'react';

class InfoBox extends Component {
    render() {
        return (
            <div className="info-box">
                <img className="info-img" src={require('../assets/' + this.props.image)} alt=""/>
                <div className="info-content">
                    <h2>{this.props.title}</h2>
                    <br/>
                    <p>{this.props.byline}</p>
                    <br/>
                    <p>{this.props.description}</p>
                    <br/>
                    <a className="info-link" href={this.props.link} target="_blank" rel="noopener noreferrer">
                        {this.props.linkName}
                    </a>
                </div>
            </div>
        )
    }
}

export default InfoBox;