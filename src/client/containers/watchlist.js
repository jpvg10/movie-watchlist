import { connect } from 'react-redux';
import { getWatchlistItems, deleteWatchlistItem } from '../store/actions/watchlist';
import Watchlist from '../components/watchlist';

const mapStateToProps = (state) => ({
    watchlistItems: state.watchlistReducer.watchlistItems,
    getStatus: state.watchlistReducer.getStatus,
    deleteStatus: state.watchlistReducer.deleteStatus
});

const mapDispatchToProps = {
    getWatchlistItems, deleteWatchlistItem
};

const WatchlistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist);

export default WatchlistContainer;
