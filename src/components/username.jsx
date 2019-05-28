import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserName } from '../actions';

class UserName extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    handleMoleCountChange = (name) => {
        this.setState({input: name});
        this.props.setUserName(name);
    }

    render() {
        return (
            <div className={`App-intro ${this.props.timerRunning ? 'hide' : 'show'}`}>
                <p>
                    Enter User Name: <input value={this.state.input} onChange={event => this.handleMoleCountChange(event.target.value)} />
                </p>
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
        setUserName: (name) => dispatch(setUserName(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserName);