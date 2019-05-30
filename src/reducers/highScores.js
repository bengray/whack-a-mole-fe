import {
    SET_HIGH_SCORES
} from '../constants/index';

export function highScores(state = [], action) {
    switch (action.type) {
        case SET_HIGH_SCORES:
            return action.payload
        default:
            return state;
    }
}   