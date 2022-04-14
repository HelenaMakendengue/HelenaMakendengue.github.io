import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
