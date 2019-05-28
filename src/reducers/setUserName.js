import {
    SET_USER_NAME
} from '../constants/index';

export function setUserName(state = '', action) {
    switch (action.type) {
        case SET_USER_NAME:
            return action.payload
        default:
            return state;
    }
}