import {
    INCREMENT_COUNT
} from '../constants/index';

export function clickCount(state = 0, action) {
    switch (action.type) {
        case INCREMENT_COUNT: 
            return state+1;

        default:
            return state;
    }
}
