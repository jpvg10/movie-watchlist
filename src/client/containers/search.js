import { connect } from 'react-redux';
import { addFavorite } from '../store/actions/favorites';
import { addWatchlistItem } from '../store/actions/watchlist';
import Search from '../components/search';

const mapDispatchToProps = {
    addFavorite, addWatchlistItem
};

const SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search);

export default SearchContainer;

