import {
    SET_SELECTED_ITEM
} from '../constants/index';

export function selectedItem(state = {}, action) {
    switch (action.type) {
        case SET_SELECTED_ITEM:
            return action.payload;

        default:
            return state;
    }
}