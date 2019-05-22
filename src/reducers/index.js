import { combineReducers } from 'redux';
import { scores } from './scores';
import { userLogin } from './userLogin';

export default combineReducers({
    scores,
    userLogin
});