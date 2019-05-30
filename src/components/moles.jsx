import React, { Component } from 'react';
import { incrementCount } from '../actions/index';
import { connect } from 'react-redux';

class Moles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showThisMole: 0
        }
    }

    renderMoles = () => {
        let moles = [];
        for (let i = 0; i < this.props.numberOfMoles; i++) {
            moles.push(
                <div className='mole-box'>
                    <div id={`mole-${i}`} onClick={this.props.incrementCount} className={this.state.showThisMole === i ? 'show' : 'hide'}>
                        <img className='mole' src='/images/mole.jpg' />
                    </div>
                </div>
            );
        }
        return moles;
    }

    newRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    generateRandomMole = () => {
        if(this.props.timerRunning) {
            setTimeout(() => {
                this.setState({showThisMole: this.newRandomNumber(0, this.props.numberOfMoles)})
            }, 1200)
        }
    }

    render() {        
        return (
            <div className={this.props.timerRunning ? 'show' : 'hide'}>
                <div className='moles-row'>
                    {this.renderMoles()}
                    {this.generateRandomMole()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        timerRunning: state.timerRunning,
        numberOfMoles: state.numberOfMoles
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: () => dispatch(incrementCount())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Moles);