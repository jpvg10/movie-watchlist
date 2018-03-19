const watchlistItems = (state = [], action) => {
    switch (action.type) {
        case 'GET_WATCHLIST_ITEMS':
            return state;
        case 'ADD_WATCHLIST_ITEM':
            return [
                ...state,
                {
                    name: action.name
                }
            ];
        case 'DELETE_WATCHLIST_ITEM':
            return state.filter((item) => item.name !== action.name);
        default:
            return state;
    }
};

export default watchlistItems;
