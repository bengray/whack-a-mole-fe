import React, { Component } from 'react';
import './App.css';
import Username from './components/username';
import Timer from './components/timer';
import Moles from './components/moles';
import MoleCount from './components/moleCount';
import HighScores from './components/highScores';
import { fetchHighScores } from './actions';
import { connect } from 'react-redux';

class App extends Component {
    constructor() {
        super();
        this.state = {
            highscores: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:8000/scores')
        .then(results => results.json())
        .then(results => this.setState({highscores: results}));
    }

    renderHighScores = () => {
        let display = [];
        for(let i=0 ; i < this.state.highscores.length ; i++) {
            display.push(
                <div className="score-item">
                    <div>
                        {this.state.highscores[i].userName}:&nbsp;
                    </div>
                    <div>
                        {this.state.highscores[i].score}    
                    </div>
                </div>
                
            );
        };
        return display;
    }

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
                <div className="score-box">
                    <h3>High Scores:</h3>
                    {this.renderHighScores()}
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
