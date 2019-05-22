import {
    SET_SCORE, GET_HIGH_SCORES
} from '../constants/index';

export function scores(state = [], action) {
    switch (action.type) {
        case GET_HIGH_SCORES:
            return action.payload.items;

        case SET_SCORE:

            const updatedItems = state.map(item => {
                if(item.time === action.payload.time) {
                    return {...item, ...action.payload}
                }
                return item;
            });

            return updatedItems;
        default:
            return state;
    }

}