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
    RESET_CLICK_COUNT,
    SET_INVALID_USER,
    SET_LOGIN_ERROR_MESSAGE
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

export function checkForLoggedInUser() {
    var userName = document.cookie.replace(/(?:(?:^|.*;\s*)validUser\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return function action(dispatch) {
        if(userName) {
            dispatch(setValidUser(userName));
            dispatch(setUserName(userName));
        }
    }
}

export function logout() {
    document.cookie = "validUser=; expires=0";
    return function action(dispatch) {
        dispatch({type: SET_INVALID_USER});
        dispatch(setUserName(''));
        window.location.reload();
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
    return async function action(dispatch) {
        dispatch({type: SAVING_SCORE});
        const url = 'http://157.230.230.142/scores';
        const payloadData = {
            userName,
            score
        };
        try {
            await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': "application/json; charset=utf-8"
                },
                body: JSON.stringify(payloadData)
            });
            dispatch({type: SCORE_SAVED_SUCCESSFULLY});
            dispatch(getHighScores());
        } catch (error) {
            console.log(error);
        }
    }
}

export function getHighScores() {
    return async function action(dispatch) {
        dispatch({type: FETCHING_HIGH_SCORES});
        try {
            const results = await fetch('http://157.230.230.142/scores');
            const parsedResults = await results.json();
            dispatch(setHighScores(parsedResults));
            dispatch({type: HIGH_SCORES_FETCHED_SUCCESSFULLY});
        } catch (error) {
            console.log(error);
        }
    }
}

export function createNewUser(userName, password) {
    return async function action(dispatch) {
        try {
            const url = 'http://157.230.230.142/user';
            const data = {
                "userName": userName,
                "password": password
            };
            const result = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': "application/json; charset=utf-8"
                },
                body: JSON.stringify(data)
            });
            const parsedResult = await result.json();
            dispatch(setValidUser(parsedResult.userName));
            dispatch(setUserName(parsedResult.userName));
            document.cookie = `validUser=${userName}`;
        } catch (error) {
            console.log(error);
            dispatch(setLoginErrorMessage('Username already exists'));
        }
    }
}

export function setLoginErrorMessage(message) {
    return {
        type: SET_LOGIN_ERROR_MESSAGE,
        payload: message
    }
}

export function userLogin(userName, password) {
    return async function action(dispatch) {
        try {
            const result = await fetch(`http://157.230.230.142/user?userName=${userName}&password=${password}`);
            const parsedResult = await result.json();
            dispatch(setValidUser(parsedResult.userName));
            dispatch(setUserName(parsedResult.userName));
            document.cookie = `validUser=${parsedResult.userName}`;
        } catch (error) {
            console.log(error);
            dispatch(setLoginErrorMessage('Invalid Credentials'));
        }
    }
}