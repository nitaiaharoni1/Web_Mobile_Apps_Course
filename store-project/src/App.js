import * as React from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters'

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <main className="container">
                    <Counters/>
                </main>
            </React.Fragment>
        );
    };
};