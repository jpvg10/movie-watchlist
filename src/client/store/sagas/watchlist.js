import { all, call, put } from 'redux-saga/effects';
import * as watchlistApi from '../../api/watchlist';
import * as favoritesApi from '../../api/favorites';

function* getWatchlistItems() {
    try {
        const result = yield call(watchlistApi.getWatchlistItems);
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
        const result = yield call(watchlistApi.addWatchlistItem, data);
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
        const result = yield call(watchlistApi.deleteWatchlistItem, data);
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

function* moveWatchlistItem(data) {
    try {
        const [watchlistItems, favorites] = yield all([
            call(watchlistApi.deleteWatchlistItem, data),
            call(favoritesApi.addFavorite, data)
        ]);
        yield put({ type:'DELETE_WATCHLIST_ITEM_SUCCESS', items: watchlistItems.data });
        yield put({ type:'ADD_FAVORITE_SUCCESS', items: favorites.data });
        yield put({ type: 'MOVE_WATCHLIST_ITEM_SUCCESS' });        
    } catch (error) {
        yield put({ type: 'MOVE_WATCHLIST_ITEM_FAILURE' });
        /*yield put({
            type: at.REQUEST_FAILURE,
            data,
            message: error.message || 'Oops! something went wrong!',
            requestFailed: at.FETCH_REQUEST
        });*/
    }
}

export default { getWatchlistItems, addWatchlistItem, deleteWatchlistItem, moveWatchlistItem }
