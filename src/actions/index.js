import {
    SET_VALID_USER,
    START_TIMER,
    STOP_TIMER,
    INCREMENT_COUNT,
    SET_MOLE_COUNT,
    SET_USER_NAME,
    SET_HIGH_SCORES,
    SET_LAST_UPDATED
} from '../constants/index';

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

export function setValidUser(userName) {
    return {
        type: SET_VALID_USER,
        payload: userName
    }
}

export function setHighScores(scores) {
    return {
        type: SET_HIGH_SCORES,
        payload: scores
    }
}
