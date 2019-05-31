import {
    SET_LOGIN_ERROR_MESSAGE
} from '../constants/index';

export function loginErrorMessage(state = null, action) {
    switch (action.type) {
        case SET_LOGIN_ERROR_MESSAGE:
            return action.payload
        default:
            return state;
    }
}