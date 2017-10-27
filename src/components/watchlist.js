import React from 'react';

//Component requires
import WatchlistTableComponent from './watchlist-table-component';

class Watchlist extends React.Component {
	render() {
		return(
			<div>
			 	<h1 className="title">These are the movies you have yet to watch:</h1>
			 	<WatchlistTableComponent />
			</div>
		);
	}
};

export default Watchlist;
