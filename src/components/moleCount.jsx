import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNumberOfMoles } from '../actions';

class MoleCount extends Component {
    constructor() {
        super();
        this.state = {
            moleCount: 9,
            errorMessage: null
        }
    }

    isWholeNumber = (input) => {
        if (input !== '0' && input % 1 === 0) {
            return true;
        }
        return false;
    }

    handleMoleCountChange = (input) => {
        if (!this.isWholeNumber(input)) {
            this.setState({errorMessage: 'Must be a non-zero whole number'});
        } else if (input > 20) {
            this.setState({errorMessage: 'Don\'t be a hero, 20 or less'});
        } else {
            this.setState({moleCount: input, errorMessage: null});
            this.props.setNumberOfMoles(parseInt(input, 10));
        }
    }

    render() {
        return (
            <div className={`mole-count ${this.props.timerRunning ? 'hide' : 'show'}`}>
                <span className="error-message">{this.state.errorMessage}</span><br />
                Enter number of moles: <input className="mole-count-input" value={this.state.moleCount} onChange={event => this.handleMoleCountChange(event.target.value)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        timerRunning: state.timerRunning,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNumberOfMoles: (number) => dispatch(setNumberOfMoles(number))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoleCount);
