import {
    SET_VALID_USER
} from '../constants/index';

export function validUser(state = false, action) {
    switch (action.type) {
        case SET_VALID_USER:
            return true;

        default:
            return state;
    }
}