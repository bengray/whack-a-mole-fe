import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    startTimer,
    stopTimer,
    saveScore } from '../actions/index';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 10,
            buttonText: 'START!'
        }
    }

    runTicker = () => {
        if(this.state.seconds > 0) {
            this.setState({seconds: this.state.seconds - 1});
        }
        if(this.state.seconds === 0) {
            this.props.stopTimer();
            this.setState({buttonText: 'RESET'});
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
        this.props.startTimer();
        this.runTicker();
    }

    resetGame = () => {
        this.setState({seconds: 10, buttonText: 'START!'});
    }

    handleButtonClick = () => {
        if (this.state.seconds === 0 && !this.props.timerRunning) {
            this.resetGame();
        } else {
            this.handleStartTimer()
        }
    }

    render() {
        return (
            <div className='timer-section'>
                <button className={this.props.timerRunning ? 'hide' : 'show'} onClick={() => this.handleButtonClick()}>{this.state.buttonText}</button>
                <br />
                Seconds remaining: {this.state.seconds}
                <br />
                <br />
                {this.state.message}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        timerRunning: state.timerRunning,
        userName: state.userName,
        clickCount: state.clickCount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startTimer: () => dispatch(startTimer()),
        stopTimer: () => dispatch(stopTimer()),
        saveScore: (userName, score) => dispatch(saveScore(userName, score))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);