export const getFavorites = () => ({
    type: 'GET_FAVORITES_REQUEST'
});

export const addFavorite = ({ name }) => ({
    type: 'ADD_FAVORITE_REQUEST',
    name
});

export const editFavorite = ({ name, stars }) => ({
    type: 'EDIT_FAVORITE_REQUEST',
    name,
    stars
});

export const deleteFavorite = ({ name }) => ({
    type: 'DELETE_FAVORITE_REQUEST',
    name
});

export const resetAddFavoriteStatus = () => ({
    type: 'RESET_ADD_FAVORITE_STATUS'
});

export const resetEditFavoriteStatus = () => ({
    type: 'RESET_EDIT_FAVORITE_STATUS'
});

export const resetDeleteFavoriteStatus = () => ({
    type: 'RESET_DELETE_FAVORITE_STATUS'
});
