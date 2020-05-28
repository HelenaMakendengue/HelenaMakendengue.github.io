import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Error from './components/Error.js';
import PersonalWebsite from './projects/PersonalWebsite';
import Asurion from './projects/Asurion';
import ARMRI from './projects/ARMRI';
import WACC from './projects/WACC';
import HackGT from './projects/HackGT';
import Photography from './projects/Photography';
import Videography from './projects/Videography';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/about" component={About}/>

            <Route exact path="/helenamakendengue-github-io" component={PersonalWebsite}/>
            <Route exact path="/asurion" component={Asurion}/>
            <Route exact path="/ar-mri" component={ARMRI}/>
            <Route exact path="/women-at-cc" component={WACC}/>
            <Route exact path="/hack-gt" component={HackGT}/>
            <Route exact path="/photography" component={Photography}/>
            <Route exact path="/videography" component={Videography}/>

            <Route path='*' component={Error}/>
        </Switch>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
