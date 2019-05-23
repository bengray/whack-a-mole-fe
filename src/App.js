import React, { Component } from 'react';
import './App.css';
import LoginModal from './components/modal';

class App extends Component {
    render() {
        return (
            <div>
                 <div className="App">
                    <div className="App-header">
                    <h2>Whack a mole</h2>
                    </div>
                    <p className="App-intro">
                    Click the START button to begin!
                    </p>
                    <button>START!</button>
                </div>
                <LoginModal />
            </div>
        );
    }
}

export default App;
