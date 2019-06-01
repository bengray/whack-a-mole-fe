import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    startTimer,
    stopTimer,
    saveScore,
    resetClickCount,
    logout } from '../actions/index';
import { Button } from 'react-bootstrap';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 20,
            buttonText: 'START!'
        }
    }

    runTicker = () => {
        if(this.state.seconds > 0) {
            this.setState({seconds: this.state.seconds - 1});
        }
        if(this.state.seconds === 0) {
            this.props.stopTimer();
            this.setState({buttonText: 'NEW GAME'});
            this.props.saveScore(
                this.props.userName,
                this.props.clickCount
            );
        }
        if(this.state.seconds !== 0) {
            setTimeout(this.runTicker, 1000);
        }
    }

    handleStartTimer = () => {
        if(this.props.numberOfMoles !== 0 && this.props.numberOfMoles !== null) {
            this.props.startTimer();
            this.runTicker();
        } else {
            alert('number of moles must be greater than zero');
        }
    }

    resetGame = () => {
        this.setState({seconds: 20, buttonText: 'START!'});
        this.props.resetClickCount();
    }

    handleButtonClick = () => {
        if (!this.props.validUser) {
            this.props.logout();
        } else if (this.state.seconds === 0 && !this.props.timerRunning) {
            this.resetGame();
        } else {
            this.handleStartTimer()
        }
    }

    render() {
        return (
            <div className='timer-section'>
                <Button className={`start-button ${this.props.timerRunning ? 'hide' : 'show'}`} onClick={() => this.handleButtonClick()}>{this.state.buttonText}</Button>
                <div className="seconds-remaining">
                   <span>Timer: {this.state.seconds}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        timerRunning: state.timerRunning,
        userName: state.userName,
        clickCount: state.clickCount,
        numberOfMoles: state.numberOfMoles,
        validUser: state.validUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startTimer: () => dispatch(startTimer()),
        stopTimer: () => dispatch(stopTimer()),
        saveScore: (userName, score) => dispatch(saveScore(userName, score)),
        resetClickCount: () => dispatch(resetClickCount()),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);