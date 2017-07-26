import { findIndex } from 'lodash';

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH':
            return action.items;
        case 'ITEM_SET':

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