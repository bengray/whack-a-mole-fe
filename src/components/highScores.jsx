import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoleCount extends Component {

    render() {
        const renderScores = () => {
            let display = [];
            for(let i=0 ; i < this.props.highScores.length ; i++) {
                display.push(
                    <div key={i} className="score-item">
                        <div>
                            {this.props.highScores[i].userName}:&nbsp;
                        </div>
                        <div>
                            {this.props.highScores[i].score}    
                        </div>
                    </div>
                    
                );
            };
            return display;
        }
        return (
            <div className="score-box">
                <h3>Top 5 Scores:</h3>
                {renderScores()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        highScores: state.highScores
    };
};

export default connect(mapStateToProps, null)(MoleCount);