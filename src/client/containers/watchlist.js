import { connect } from 'react-redux';
import { getWatchlistItems, deleteWatchlistItem, moveWatchlistItem, resetDeleteWatchlistItemStatus, resetMoveWatchlistItemStatus } from '../store/actions/watchlist';
import Watchlist from '../components/watchlist';

const mapStateToProps = (state) => ({
    watchlistItems: state.watchlistReducer.watchlistItems,
    getStatus: state.watchlistReducer.getStatus,
    deleteStatus: state.watchlistReducer.deleteStatus,
    moveStatus: state.watchlistReducer.moveStatus
});

const mapDispatchToProps = {
    getWatchlistItems, deleteWatchlistItem, moveWatchlistItem, resetDeleteWatchlistItemStatus, resetMoveWatchlistItemStatus
};

const WatchlistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist);

export default WatchlistContainer;