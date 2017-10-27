import React from 'react';

import WatchlistList from './watchlist-list-component';

class Watchlist extends React.Component {
	render() {
		return(
			<div>
			 	<h1 className="title">These are the movies you have yet to watch:</h1>
			 	<WatchlistList />
			</div>
		);
	}
};

export default Watchlist;
