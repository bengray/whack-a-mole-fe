import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMoleSpeed } from '../actions';

class MoleCount extends Component {
    constructor() {
        super();
        this.state = {
            moleSpeed: 'slow',
            errorMessage: null
        }
    }

    handleChange = (speed) => {
        this.setState({moleSpeed: speed});
        this.props.setMoleSpeed(speed);
    }

    render() {
        return (
            <div className={`mole-count ${this.props.timerRunning ? 'hide' : 'show'}`}>
                <span className="error-message">{this.state.errorMessage}</span><br />
                Select mole speed:&nbsp;
                    <select onChange={(e) => this.handleChange(e.target.value)}>
                        <option value='slow'>Normal</option>
                        <option value='fast'>Insane</option>
                    </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        moleSpeed: state.moleSpeed,
        timerRunning: state.timerRunning
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMoleSpeed: (speed) => dispatch(setMoleSpeed(speed))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoleCount);
