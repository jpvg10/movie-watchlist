export const getWatchlistItems = () => ({
    type: 'GET_WATCHLIST_ITEMS_REQUEST'
});

export const addWatchlistItem = ({ name }) => ({
    type: 'ADD_WATCHLIST_ITEM_REQUEST',
    name
});

export const deleteWatchlistItem = ({ name }) => ({
    type: 'DELETE_WATCHLIST_ITEM_REQUEST',
    name
});

export const moveWatchlistItem = ({ name }) => ({
    type: 'MOVE_WATCHLIST_ITEM_REQUEST',
    name
});
