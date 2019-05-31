import { combineReducers } from 'redux';
import { validUser } from './validUser';
import { clickCount } from './clickCount';
import { timerRunning } from './timerRunning';
import { numberOfMoles } from './numberOfMoles';
import { userName } from './userName';
import { highScores } from './highScores';
import { moleSpeed } from './moleSpeed';
import { loginErrorMessage } from './loginErrorMessage';

export default combineReducers({
    validUser,
    clickCount,
    timerRunning,
    numberOfMoles,
    userName,
    highScores,
    moleSpeed,
    loginErrorMessage
});