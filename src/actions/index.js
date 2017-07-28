import {
    SET_ITEM,
    OPEN_MODAL,
    CLOSE_MODAL,
    SET_SELECTED_ITEM
} from '../constants/index';

export function setItem(item) {
    return {
        type: SET_ITEM,
        payload: item
    };
}

export function openModal() {
    return {
        type: OPEN_MODAL,
        payload: true
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL,
        payload: false
    };
}

export function setSelectedItem(item) {
    return {
        type: SET_SELECTED_ITEM,
        payload: item
    }
}