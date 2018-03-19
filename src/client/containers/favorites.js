import { connect } from 'react-redux';
import { getFavorites, editFavorite, deleteFavorite } from '../store/actions/favorites';
import Favorites from '../components/favorites';

const mapStateToProps = (state) => ({
    favorites: state.favoritesReducer.favorites,
    getStatus: state.favoritesReducer.getStatus,
    editStatus: state.favoritesReducer.editStatus,
    deleteStatus: state.favoritesReducer.deleteStatus
});

const mapDispatchToProps = {
    getFavorites, editFavorite, deleteFavorite
};

const FavoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

export default FavoritesContainer;
