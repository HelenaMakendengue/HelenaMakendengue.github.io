import React, { Component } from 'react';

class IconBox extends Component {
    render() {
        return (
            <div className="icon-box">
                <div className="icon-title">
                    <p className="icon-icon">{this.props.icon}</p>
                    <p>{this.props.title}</p>
                </div>
                <div className="icon-desc">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default IconBox;