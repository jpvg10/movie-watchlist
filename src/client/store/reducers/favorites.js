import { combineReducers } from 'redux';

const favorites = (state = [], action) => {
    switch (action.type) {
        case 'GET_FAVORITES_SUCCESS':
            return action.items;
        case 'ADD_FAVORITE_SUCCESS':
            return action.items;
        case 'EDIT_FAVORITE_SUCCESS':
            return action.items;
        case 'DELETE_FAVORITE_SUCCESS':
            return action.items;
        default:
            return state;
    }
};

const getStatus = (state = 'notLoaded', action) => {
    switch (action.type) {
        case 'GET_FAVORITES_REQUEST':
            return 'loading';
        case 'GET_FAVORITES_SUCCESS':
            return 'loaded';
        case 'GET_FAVORITES_FAILURE':
            return 'failed';
        default:
            return state;
    }
};

const addStatus = (state = 'notAdded', action) => {
    switch (action.type) {
        case 'ADD_FAVORITE_REQUEST':
            return 'adding';
        case 'ADD_FAVORITE_SUCCESS':
            return 'added';
        case 'ADD_FAVORITE_FAILURE':
            return 'failed';
        case 'RESET_ADD_FAVORITE_STATUS':
            return 'notAdded';
        default:
            return state;
    }
};

const editStatus = (state = 'notEdited', action) => {
    switch (action.type) {
        case 'EDIT_FAVORITE_REQUEST':
            return 'editing';
        case 'EDIT_FAVORITE_SUCCESS':
            return 'edited';
        case 'EDIT_FAVORITE_FAILURE':
            return 'failed';
        case 'RESET_EDIT_FAVORITE_STATUS':
            return 'notEdited';    
        default:
            return state;
    }
};

const deleteStatus = (state = 'notDeleted', action) => {
    switch (action.type) {
        case 'DELETE_FAVORITE_REQUEST':
            return 'deleting';
        case 'DELETE_FAVORITE_SUCCESS':
            return 'deleted';
        case 'DELETE_FAVORITE_FAILURE':
            return 'failed';
        case 'RESET_DELETE_FAVORITE_STATUS':
            return 'notDeleted';
        default:
            return state;
    }
};

export default combineReducers({ favorites, getStatus, addStatus, editStatus, deleteStatus });
