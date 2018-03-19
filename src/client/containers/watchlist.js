import { connect } from 'react-redux';
import { getWatchlistItems, addWatchlistItem, deleteWatchlistItem } from '../store/actions/watchlist';
import Watchlist from '../components/watchlist';

const mapStateToProps = (state) => ({
    watchlistItems: state.watchlistItems
});

const mapDispatchToProps = {
    getWatchlistItems, addWatchlistItem, deleteWatchlistItem
};

const WatchlistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist);

export default WatchlistContainer;
