import { call, put } from 'redux-saga/effects';
import * as api from '../../api/favorites';

function* getFavorites() {
    try {
        const result = yield call(api.getFavorites);
        yield put({ type:'GET_FAVORITES_SUCCESS', items: result.data });
    } catch (error) {
        yield put({ type: 'GET_FAVORITES_FAILURE' });
        /*yield put({
            type: at.REQUEST_FAILURE,
            data,
            message: error.message || 'Oops! something went wrong!',
            requestFailed: at.FETCH_REQUEST
        });*/
    }
}

function* addFavorite(data) {
    try {
        const result = yield call(api.addFavorite, data);
        yield put({ type:'ADD_FAVORITE_SUCCESS', items: result.data });
    } catch (error) {
        yield put({ type: 'ADD_FAVORITE_FAILURE' });
        /*yield put({
            type: at.REQUEST_FAILURE,
            data,
            message: error.message || 'Oops! something went wrong!',
            requestFailed: at.FETCH_REQUEST
        });*/
    }
}

function* editFavorite(data) {
    try {
        const result = yield call(api.editFavorite, data);
        yield put({ type:'EDIT_FAVORITE_SUCCESS', items: result.data });
    } catch (error) {
        yield put({ type: 'EDIT_FAVORITE_FAILURE' });
        /*yield put({
            type: at.REQUEST_FAILURE,
            data,
            message: error.message || 'Oops! something went wrong!',
            requestFailed: at.FETCH_REQUEST
        });*/
    }
}

function* deleteFavorite(data) {
    try {
        const result = yield call(api.deleteFavorite, data);
        yield put({ type:'DELETE_FAVORITE_SUCCESS', items: result.data });
    } catch (error) {
        yield put({ type: 'DELETE_FAVORITE_FAILURE' });
        /*yield put({
            type: at.REQUEST_FAILURE,
            data,
            message: error.message || 'Oops! something went wrong!',
            requestFailed: at.FETCH_REQUEST
        });*/
    }
}

export default { getFavorites, addFavorite, editFavorite, deleteFavorite }
