export const getFavorites = () => ({
    type: 'GET_FAVORITES'
});

export const addFavorite = (name) => ({
    type: 'ADD_FAVORITE',
    name
});

export const editFavorite = (name, newRating) => ({
    type: 'EDIT_FAVORITE',
    name,
    newRating
});

export const deleteFavorite = (name) => ({
    type: 'DELETE_FAVORITE',
    name
});
