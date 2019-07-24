import React from 'react';
import './App.css';
import { Nav, Home, About } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Home/>
                <About/>
            </div>
        </Router>

    );
}

export default App;
