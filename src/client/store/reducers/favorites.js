const favorites = (state = [], action) => {
    switch (action.type) {
        case 'GET_FAVORITES':
            return state;
        case 'ADD_FAVORITE':
            return [
                ...state,
                {
                    name: action.name,
                    stars: 0
                }
            ];
        case 'EDIT_FAVORITE':
            return state.map((favorite) => {
                if(favorite.name === action.name){
                    return {
                        ...favorite,
                        stars: action.newRating
                    };
                }else{
                    return favorite;
                }
            });
        case 'DELETE_FAVORITE':
            return state.filter((favorite) => favorite.name !== action.name);
        default:
            return state;
    }
};

export default favorites;
