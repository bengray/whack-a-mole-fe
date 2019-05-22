import {
    SET_SCORE,
    GET_HIGH_SCORES,
    USER_LOGIN
} from '../constants/index';

export function setScore(item) {
    return {
        type: SET_SCORE,
        payload: item
    };
}

export function userLogin(userName, password) {
    return {
        type: USER_LOGIN,
        payload: true
    };
}

export function getHighScores() {
    return {
        type: GET_HIGH_SCORES,
        payload: false
    };
}
