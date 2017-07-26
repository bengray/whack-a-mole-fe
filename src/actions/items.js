export function fetchItems(items) {
    return {
        type: 'ITEMS_FETCH',
        payload: items
    };
}

export function setItem(item) {
    return {
        type: 'ITEM_SET',
        payload: {
            displayName: item.displayName,
            scheduled: "true",
            time: item.time
        }
    };
}
