import React, { Component } from 'react';

class IconBox extends Component {
    render() {
        return (
            <div className="icon-box">
                <p className="icon-icon">{this.props.icon}</p>
                <div className="icon-text">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default IconBox;