import { findIndex } from 'lodash';

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH':
            return action.items;
        case 'ITEM_SET':
            return Object.assign([], state, {
                time: action.payload.time,
                displayName: action.payload.displayName,
                scheduled: "true"
            });

        default:
            return state;
    }
}