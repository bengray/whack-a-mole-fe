import { combineReducers } from 'redux';
import { userLogin } from './userLogin';
import { clickCount } from './clickCount';
import { timerRunning } from './timerRunning';
import { numberOfMoles } from './numberOfMoles';
import { setUserName } from './setUserName';

export default combineReducers({
    userLogin,
    clickCount,
    timerRunning,
    numberOfMoles,
    setUserName
});