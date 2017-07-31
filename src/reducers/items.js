import {
    SET_ITEM,
    FETCH_INITIAL_STATE
} from '../constants/index';

export function items(state = [], action) {
    switch (action.type) {
        case FETCH_INITIAL_STATE:
            return action.payload.items;

        case SET_ITEM:

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