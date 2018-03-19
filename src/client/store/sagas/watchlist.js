import { call, put } from 'redux-saga/effects';
import * as api from '../../api/watchlist';

function* getWatchlistItems() {
    try {
        const result = yield call(api.getWatchlistItems);
        yield put({ type:'GET_WATCHLIST_ITEMS_SUCCESS', items: result.data });
    } catch (error) {
        yield put({ type: 'GET_WATCHLIST_ITEMS_FAILURE' });
        /*yield put({
            type: at.REQUEST_FAILURE,
            data,
            message: error.message || 'Oops! something went wrong!',
            requestFailed: at.FETCH_REQUEST
        });*/
    }
}

function* addWatchlistItem(data) {
    try {
        const result = yield call(api.addWatchlistItem, data);
        yield put({ type:'ADD_WATCHLIST_ITEM_SUCCESS', items: result.data });
    } catch (error) {
        yield put({ type: 'ADD_WATCHLIST_ITEM_FAILURE' });
        /*yield put({
            type: at.REQUEST_FAILURE,
            data,
            message: error.message || 'Oops! something went wrong!',
            requestFailed: at.FETCH_REQUEST
        });*/
    }
}

function* deleteWatchlistItem(data) {
    try {
        const result = yield call(api.deleteWatchlistItem, data);
        yield put({ type:'DELETE_WATCHLIST_ITEM_SUCCESS', items: result.data });
    } catch (error) {
        yield put({ type: 'DELETE_WATCHLIST_ITEM_FAILURE' });
        /*yield put({
            type: at.REQUEST_FAILURE,
            data,
            message: error.message || 'Oops! something went wrong!',
            requestFailed: at.FETCH_REQUEST
        });*/
    }
}

export default { getWatchlistItems, addWatchlistItem, deleteWatchlistItem }
