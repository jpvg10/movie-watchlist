import React from 'react';

//Component requires
import TableComponent from './table-component';

// Authentication module
import Auth from '../../auth';

class Watchlist extends React.Component {
	componentWillMount() {
		if(!Auth.isUserAuthenticated()){
			this.props.history.push('/');
		}
	}

	render() {
		const { watchlistItems, deleteWatchlistItem } = this.props;
		return(
			<div>
				<article className="media">
					<figure className="media-left">
						<p className="image is-64x64">
							<img src="/img/seat.png" />
						</p>
					</figure>
					<div className="media-content">
						<h1 className="title">These are the movies you have yet to watch:</h1>
					</div>
				</article>
			 	
			 	<TableComponent 
					watchlistItems={watchlistItems} 
					deleteWatchlistItem={deleteWatchlistItem}
				/>
			</div>
		);
	}
};

export default Watchlist;
