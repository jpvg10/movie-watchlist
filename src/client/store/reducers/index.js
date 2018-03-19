import { combineReducers } from 'redux';
import favoritesReducer from './favorites';
import watchlistReducer from './watchlist';

export default combineReducers({ favoritesReducer, watchlistReducer });
