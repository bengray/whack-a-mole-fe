import {
    INCREMENT_COUNT,
    RESET_CLICK_COUNT
} from '../constants/index';

export function clickCount(state = 0, action) {
    switch (action.type) {
        case INCREMENT_COUNT: 
            return state+1;

        case RESET_CLICK_COUNT:
            return 0;
        default:
            return state;
    }
}
