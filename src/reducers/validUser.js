import {
    SET_VALID_USER,
    SET_INVALID_USER
} from '../constants/index';

export function validUser(state = false, action) {
    switch (action.type) {
        case SET_VALID_USER:
            return true;

        case SET_INVALID_USER:
            return false;

        default:
            return state;
    }
}