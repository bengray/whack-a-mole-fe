import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoleCount extends Component {

    render() {
        const renderScores = () => {
            let display = [];
            this.props.highScores.map((highScore, index) => {
                display.push(
                    <div key={`highscore-${index}`} className="score-item">
                        <div>
                            {highScore.userName}:&nbsp;
                        </div>
                        <div>
                            {highScore.score}    
                        </div>
                    </div>
                )
            });
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