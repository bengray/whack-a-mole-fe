import { combineReducers } from 'redux';
import { scores } from './scores';
import { userLogin } from './userLogin';
import { clickCount } from './clickCount';
import { timerRunning } from './timerRunning';
import { numberOfMoles } from './numberOfMoles';
import { setUserName } from './setUserName';

export default combineReducers({
    scores,
    userLogin,
    clickCount,
    timerRunning,
    numberOfMoles,
    setUserName
});