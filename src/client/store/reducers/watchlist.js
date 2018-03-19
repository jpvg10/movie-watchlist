import { combineReducers } from 'redux';

const watchlistItems = (state = [], action) => {
    switch (action.type) {
        case 'GET_WATCHLIST_ITEMS_SUCCESS':
            return action.items;
        case 'ADD_WATCHLIST_ITEM_SUCCESS':
            return action.items;
        case 'DELETE_WATCHLIST_ITEM_SUCCESS':
            return action.items;
        default:
            return state;
    }
};

const getStatus = (state = 'notLoaded', action) => {
    switch (action.type) {
        case 'GET_WATCHLIST_ITEMS_REQUEST': {
            return 'loading';
        }
        case 'GET_WATCHLIST_ITEMS_SUCCESS': {
            return 'loaded';
        }
        case 'GET_WATCHLIST_ITEMS_FAILURE': {
            return 'failed';
        }
        default:
            return state;
    }
};

const addStatus = (state = 'notAdded', action) => {
    switch (action.type) {
        case 'ADD_WATCHLIST_ITEM_REQUEST': {
            return 'adding';
        }
        case 'ADD_WATCHLIST_ITEM_SUCCESS': {
            return 'added';
        }
        case 'ADD_WATCHLIST_ITEM_FAILURE': {
            return 'failed';
        }
        default:
            return state;
    }
};

const deleteStatus = (state = 'notDeleted', action) => {
    switch (action.type) {
        case 'DELETE_WATCHLIST_ITEM_REQUEST': {
            return 'deleting';
        }
        case 'DELETE_WATCHLIST_ITEM_SUCCESS': {
            return 'deleted';
        }
        case 'DELETE_WATCHLIST_ITEM_FAILURE': {
            return 'failed';
        }
        default:
            return state;
    }
};

const moveStatus = (state = 'notMoved', action) => {
    switch (action.type) {
        case 'MOVE_WATCHLIST_ITEM_REQUEST': {
            return 'moving';
        }
        case 'MOVE_WATCHLIST_ITEM_SUCCESS': {
            return 'moved';
        }
        case 'MOVE_WATCHLIST_ITEM_FAILURE': {
            return 'failed';
        }
        default:
            return state;
    }
};

export default combineReducers({ watchlistItems, getStatus, addStatus, deleteStatus, moveStatus });
