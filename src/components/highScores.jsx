import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoleCount extends Component {
    constructor() {
        super();
       
    }

    renderScores = () => {
        return (
            <div>

            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderScores()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        scores: state.scores,
    };
};

export default connect(mapStateToProps, null)(MoleCount);