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
                <div key={i} className='mole-box'>
                    <div id={`mole-${i}`} onClick={this.props.incrementCount} className={this.state.showThisMole === i ? 'show' : 'hide'}>
                        <img className='mole' src='/images/mole.png' alt='' />
                    </div>
                </div>
            );
        }
        return moles;
    }

    generateRandomNumber = (min, max) => {
        const newNumber = Math.floor(Math.random() * (max - min));
        return newNumber;
    }

    getMoleSpeed = () => {
        const moleSpeed = this.props.moleSpeed;
        if (moleSpeed === 'fast') {
            return 450;
        } else if (moleSpeed === 'slow') {
            return 1860;
        } else {
            return 1200;
        }
    }

    generateRandomMole = () => {
        if(this.props.timerRunning) {
            setTimeout(() => {
                this.setState({showThisMole: this.generateRandomNumber(0, this.props.numberOfMoles)})
            }, this.getMoleSpeed())
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
        numberOfMoles: state.numberOfMoles,
        moleSpeed: state.moleSpeed
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: () => dispatch(incrementCount())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Moles);