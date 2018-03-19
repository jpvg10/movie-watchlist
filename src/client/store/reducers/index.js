import { combineReducers } from 'redux';
import favorites from './favorites';
import watchlistItems from './watchlist';

export default combineReducers({ favorites, watchlistItems });
