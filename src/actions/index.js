import {
    SET_SCORE,
    GET_HIGH_SCORES,
    USER_LOGIN,
    OPEN_MODAL,
    CLOSE_MODAL,
    START_TIMER,
    STOP_TIMER,
    INCREMENT_COUNT,
    SET_MOLE_COUNT,
    SET_USER_NAME,
    STORE_USER_SCORE
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

export function startTimer() {
    return {
        type: START_TIMER,
        payload: 'running'
    };
}

export function stopTimer(hitCount) {
    return {
        type: STOP_TIMER,
        payload: 'stopped'
    };
}

export function incrementCount() {
    return {
        type: INCREMENT_COUNT
    }
}

export function setNumberOfMoles(number) {
    return {
        type: SET_MOLE_COUNT,
        payload: number
    }
}

export function setUserName(name) {
    return {
        type: SET_USER_NAME,
        payload: name
    }
}

export function storeUserScore(userName, score) {
    return {
        type: STORE_USER_SCORE,
        payload: {
            userName,
            score
        }
    }
}