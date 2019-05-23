import {
    USER_LOGIN
} from '../constants/index';

export function userLogin(state = true, action) {
    switch (action.type) {
        case USER_LOGIN:
            return action.payload;

        default:
            return state;
    }
}