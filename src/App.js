import React, { Component } from 'react';
import './App.css';
import Username from './components/username';
import Timer from './components/timer';
import Moles from './components/moles';
import MoleCount from './components/moleCount';
import HighScores from './components/highScores';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                 <div className="App">
                    <div className="App-header">
                    <h2>Whack a mole</h2>
                    <p>
                        Click the START button to begin!
                    </p>
                    </div>
                    <div className="click-count">
                        Total Hits: {this.props.clickCount}
                    </div>
                </div>
                <Timer />
                <div className="game-body">
                    <Username />
                    <MoleCount />
                    <Moles />                    
                </div>
                <div className="high-scores">
                    <HighScores />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clickCount: state.clickCount,
    };
};

export default connect(mapStateToProps)(App);
