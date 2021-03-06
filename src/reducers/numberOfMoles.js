import {
    SET_MOLE_COUNT
} from '../constants/index';

export function numberOfMoles(state = 9, action) {
    switch (action.type) {
        case SET_MOLE_COUNT:
            return action.payload
        default:
            return state;
    }
}