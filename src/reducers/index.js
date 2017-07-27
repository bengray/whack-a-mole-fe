import { combineReducers } from 'redux';
import { items } from './items';
import { showModal } from './modal';
import { selectedItem } from './selectedItem';

export default combineReducers({
    items,
    showModal,
    selectedItem
});