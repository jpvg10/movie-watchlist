import { takeLatest } from 'redux-saga/effects';
import favorites from './favorites';
import watchlist from './watchlist';

export default function* root() {
    yield takeLatest('GET_FAVORITES_REQUEST', favorites.getFavorites);
    yield takeLatest('ADD_FAVORITE_REQUEST', favorites.addFavorite);
    yield takeLatest('EDIT_FAVORITE_REQUEST', favorites.editFavorite);
    yield takeLatest('DELETE_FAVORITE_REQUEST', favorites.deleteFavorite);
    yield takeLatest('GET_WATCHLIST_ITEMS_REQUEST', watchlist.getWatchlistItems);
    yield takeLatest('ADD_WATCHLIST_ITEM_REQUEST', watchlist.addWatchlistItem);
    yield takeLatest('DELETE_WATCHLIST_ITEM_REQUEST', watchlist.deleteWatchlistItem);
}
