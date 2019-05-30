import {
    SET_MOLE_SPEED
} from '../constants/index';

export function moleSpeed(state = 'slow', action) {
    switch (action.type) {
        case SET_MOLE_SPEED:
            return action.payload
        default:
            return state;
    }
}