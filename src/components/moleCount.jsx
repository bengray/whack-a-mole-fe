import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNumberOfMoles } from '../actions';

class MoleCount extends Component {
    constructor() {
        super();
        this.state = {
            moleCount: 3
        }
    }

    handleMoleCountChange = (number) => {
        this.setState({moleCount: number, errorMessage: null});
        this.props.setNumberOfMoles(parseInt(number, 10));
    }

    render() {
        return (
            <div className={`mole-count ${this.props.timerRunning ? 'hide' : 'show'}`}>
                <span className="error">{this.state.errorMessage}</span><br />
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
