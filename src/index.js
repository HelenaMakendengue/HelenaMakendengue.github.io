import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Error from './components/Error.js';

const routing = (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path='*' component={Error} />
        </Switch>
        <Footer/>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
