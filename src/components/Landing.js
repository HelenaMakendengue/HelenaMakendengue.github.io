import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Landing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default Landing;