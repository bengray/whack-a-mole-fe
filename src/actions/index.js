import {
    SET_VALID_USER,
    START_TIMER,
    STOP_TIMER,
    INCREMENT_COUNT,
    SET_MOLE_COUNT,
    SET_MOLE_SPEED,
    SET_USER_NAME,
    SET_HIGH_SCORES,
    SCORE_SAVED_SUCCESSFULLY,
    SAVING_SCORE,
    FETCHING_HIGH_SCORES,
    HIGH_SCORES_FETCHED_SUCCESSFULLY,
    RESET_CLICK_COUNT
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

export function setMoleSpeed(speed) {
    return {
        type: SET_MOLE_SPEED,
        payload: speed
    }
}

export function resetClickCount() {
    return {
        type: RESET_CLICK_COUNT
    }
}

export function saveScore(userName, score) {
    return function action(dispatch) {
        dispatch({type: SAVING_SCORE});
        const url = 'http://localhost:8000/scores';
        const payloadData = {
            userName,
            score
        };
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': "application/json; charset=utf-8"
            },
            body: JSON.stringify(payloadData)
        })
        .then(() => {
            dispatch({type: SCORE_SAVED_SUCCESSFULLY});
        })
        .then(() => dispatch(getHighScores()));
    }
}

export function getHighScores() {
    return function action(dispatch) {
        dispatch({type: FETCHING_HIGH_SCORES});

        return fetch('http://localhost:8000/scores')
        .then(results => results.json())
        .then(results => dispatch(setHighScores(results)))
        .then(() => dispatch({type: HIGH_SCORES_FETCHED_SUCCESSFULLY}));
    }
}
