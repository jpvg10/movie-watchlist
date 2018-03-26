import { connect } from 'react-redux';
import { addFavorite, resetAddFavoriteStatus } from '../store/actions/favorites';
import { addWatchlistItem, resetAddWatchlistItemStatus } from '../store/actions/watchlist';
import Search from '../components/search';

const mapStateToProps = (state) => ({
  addFavoriteStatus: state.favoritesReducer.addStatus,
  addWatchlistItemStatus: state.watchlistReducer.addStatus
});

const mapDispatchToProps = {
    addFavorite, resetAddFavoriteStatus, addWatchlistItem, resetAddWatchlistItemStatus
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
