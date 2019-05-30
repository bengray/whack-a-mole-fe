import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer } from '../actions/index';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 10,
            buttonText: 'START!'
        }
    }

    saveScore = () => {
        const url = 'http://localhost:8000/scores';
        const data = {
            "userName": this.props.userName,
            "score": this.props.clickCount
        };

        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
                
        });
    }

    runTicker = () => {
        if(this.state.seconds > 0) {
            this.setState({seconds: this.state.seconds - 1});
        }
        if(this.state.seconds === 0) {
            this.props.stopTimer();
            this.saveScore();
        }
        if(this.state.seconds !== 0) {
            setTimeout(this.runTicker, 1000);
        }
    }

    handleStartTimer = () => {
        this.setState({seconds: 10, buttonText: 'START!'});
        this.props.startTimer();
        this.runTicker();
    }

    render() {
        return (
            <div className='timer-section'>
                <button className={this.props.timerRunning ? 'hide' : 'show'} onClick={() => this.handleStartTimer()}>{this.state.buttonText}</button>
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
        stopTimer: () => dispatch(stopTimer())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);