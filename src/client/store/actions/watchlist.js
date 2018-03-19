export const getWatchlistItems = () => ({
    type: 'GET_WATCHLIST_ITEMS'
});

export const addWatchlistItem = (name) => ({
    type: 'ADD_WATCHLIST_ITEM',
    name
});

export const deleteWatchlistItem = (name) => ({
    type: 'DELETE_WATCHLIST_ITEM',
    name
});
