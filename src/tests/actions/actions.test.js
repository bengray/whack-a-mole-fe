import { 
    startTimer,
    stopTimer,
    incrementCount,
    setNumberOfMoles,
    setUserName,
    setValidUser,
    setHighScores,
    setMoleSpeed,
    resetClickCount
} from '../../actions';

describe('actions', () => {

    it('should create an action that starts the timer', () => {
        expect(startTimer()).toEqual({
            type: 'START_TIMER',
            payload: 'running'
        });
    });

    it('should create an action that stops the timer', () => {
        expect(stopTimer()).toEqual({
            type: 'STOP_TIMER',
            payload: 'stopped'
        });
    });

    it('should create an action that increments the score', () => {
        expect(incrementCount()).toEqual({
            type: 'INCREMENT_COUNT'
        });
    });

    it('should create an action that sets the number of moles', () => {
        expect(setNumberOfMoles(3)).toEqual({
            type: 'SET_MOLE_COUNT',
            payload: 3
        });
    });

    it('should create an action that sets the user name', () => {
        expect(setUserName('Frodo Baggins')).toEqual({
            type: 'SET_USER_NAME',
            payload: 'Frodo Baggins'
        });
    });

    it('should create an action that sets a valid user', () => {
        expect(setValidUser('Samwise Gamgee')).toEqual({
            type: 'SET_VALID_USER',
            payload: 'Samwise Gamgee'
        });
    });

    it('should create an action that sets high scores', () => {
        expect(setHighScores([
            {'score': 72, 'userName': 'Gollum'}
        ])).toEqual({
            type: 'SET_HIGH_SCORES',
            payload: [
                {'score': 72, 'userName': 'Gollum'}
            ]
        });
    });

    it('should create an action that sets mole speed', () => {
        expect(setMoleSpeed('slow')).toEqual({
            type: 'SET_MOLE_SPEED',
            payload: 'slow'
        });
    });

    it('should create an action that resets the click count', () => {
        expect(resetClickCount()).toEqual({
            type: 'RESET_CLICK_COUNT'
        });
    });
});
