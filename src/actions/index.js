import {
    SET_SCORE,
    GET_HIGH_SCORES,
    USER_LOGIN,
    OPEN_MODAL,
    CLOSE_MODAL
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

export function openModal() {
    return {
        type: OPEN_MODAL,
        payload: true
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL,
        payload: false
    };
}