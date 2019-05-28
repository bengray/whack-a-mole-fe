import {
    START_TIMER,
    STOP_TIMER
} from '../constants/index';

export function timerRunning(state = false, action) {
    switch (action.type) {
        case START_TIMER: 
            return true;

        case STOP_TIMER: 
            return false;

        default:
            return state;
    }
}