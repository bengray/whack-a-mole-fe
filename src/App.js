import React, { Component } from 'react';
import './App.css';
import Timer from './components/timer';
import Moles from './components/moles';
import MoleCount from './components/moleCount';
import LoginDialog from './components/loginDialog';
import HighScores from './components/highScores';
import { setHighScores } from './actions/index';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        fetch('http://localhost:8000/scores')
        .then(results => results.json())
        .then(results => this.props.setHighScores(results));
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
                <HighScores />
                <Timer />
                <div className="game-body">
                    <MoleCount />
                    <Moles />                    
                </div>
                <LoginDialog />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clickCount: state.clickCount,
        highScores: state.highScores
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setHighScores: (scores) => dispatch(setHighScores(scores))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
