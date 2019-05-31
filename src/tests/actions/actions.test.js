import { 
    startTimer,
} from '../../actions';

describe('actions', () => {

    it('should create an action that starts the timer', () => {
        expect(startTimer()).toEqual({
            type: 'START_TIMER',
            payload: 'running'
        });
    });

});