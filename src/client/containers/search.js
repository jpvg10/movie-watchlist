import { connect } from 'react-redux';
import { addFavorite } from '../store/actions/favorites';
import { addWatchlistItem } from '../store/actions/watchlist';
import Search from '../components/search';

const mapStateToProps = (state) => ({
  addFavoriteStatus: state.favoritesReducer.addStatus,
  addWatchlistItemStatus: state.watchlistReducer.addStatus
});

const mapDispatchToProps = {
    addFavorite, addWatchlistItem
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
