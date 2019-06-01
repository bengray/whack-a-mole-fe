import React, { Component } from 'react';
import './App.css';
import Timer from './components/timer';
import Moles from './components/moles';
import MoleCount from './components/moleCount';
import LoginDialog from './components/loginDialog';
import HighScores from './components/highScores';
import MoleSpeed from './components/moleSpeed';
import { getHighScores, logout, checkForLoggedInUser } from './actions/index';
import { connect } from 'react-redux';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {

    componentDidMount() {
        this.props.getHighScores();
        this.props.checkForLoggedInUser();
    }

    render() {
        return (
            <div>
                 <div className="App">
                    <div className="App-header">
                    <div className="welcome">
                        Logged in as: {this.props.userName}
                        <br /><br />
                        <span className="logout" onClick={this.props.logout}>logout &nbsp; <FontAwesomeIcon icon={faSignOutAlt} /></span>
                    </div>
                    <h2>Whack a mole</h2>
                    <p>
                        Click the START button to begin!
                    </p>
                    </div>
                    <div className="click-count">
                        Your score: {this.props.clickCount}
                    </div>
                </div>
                <HighScores />
                <div className="game-settings">
                    <MoleCount />
                    <MoleSpeed />
                </div>
                <div className="game-body">
                    <Moles />                    
                </div>
                <Timer />
                <LoginDialog />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clickCount: state.clickCount,
        userName: state.userName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHighScores: () => dispatch(getHighScores()),
        logout: () => dispatch(logout()),
        checkForLoggedInUser: () => dispatch(checkForLoggedInUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
