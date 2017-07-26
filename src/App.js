import React, { Component } from 'react';
import './App.css';
import TimeSlots from './components/time_slots';

class App extends Component {
    render() {
        return (
        <div className="App">
            <div className="App-header">
            <h2>React/Redux Scheduler</h2>
            </div>
            <p className="App-intro">
            To get started, click on a time slot.
            </p>
            <TimeSlots/>
        </div>
        );
    }
}

export default App;
