import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Error from './components/Error.js';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path='*' component={Error} />
        </Switch>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
