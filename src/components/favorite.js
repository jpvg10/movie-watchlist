import React from 'react';

//Component requires
import FavoriteTableComponent from './favorite-table-component';

class Favorite extends React.Component {
	render() {
		return(
			<div>
			 	<h1 className="title">These are your favorite movies:</h1>
			 	<FavoriteTableComponent />
			</div>
		);
	}
};

export default Favorite;
