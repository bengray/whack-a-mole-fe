import React, { Component } from 'react';
import './App.css';
import Timer from './components/timer';
import Moles from './components/moles';
import MoleCount from './components/moleCount';
import LoginDialog from './components/loginDialog';
import HighScores from './components/highScores';
import MoleSpeed from './components/moleSpeed';
import { getHighScores } from './actions/index';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.getHighScores();
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
                        Score: {this.props.clickCount}
                    </div>
                </div>
                <HighScores />
                <Timer />
                <div className="game-body">
                    <MoleCount />
                    <MoleSpeed />
                    <Moles />                    
                </div>
                <LoginDialog />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clickCount: state.clickCount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHighScores: () => dispatch(getHighScores())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
