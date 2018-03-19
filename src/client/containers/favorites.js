import { connect } from 'react-redux';
import { getFavorites, addFavorite, editFavorite, deleteFavorite } from '../store/actions/favorites';
import Favorites from '../components/favorites';

const mapStateToProps = (state) => ({
    favorites: state.favorites
});

const mapDispatchToProps = {
    getFavorites, addFavorite, editFavorite, deleteFavorite
};

const FavoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

export default FavoritesContainer;
