import React from 'react';
import { addFavorite } from '../../api/favorites';
import { addWatchlistItem } from '../../api/watchlist';

// Component requires
import { toast } from 'react-toastify';

class Item extends React.Component {
	// Custom functions
	addToWatchlist() {
		addWatchlistItem({ name: this.props.name })
			.then(function(response){
				toast.success('Added to the watchlist!');
			})
			.catch(function(error){
				toast.error('Oops! Something happened. Try again later.');
			});
	}

	addToFavorites() {
		addFavorite({ name: this.props.name })
			.then(function(response){
				toast.success('Added to favorites!');
			})
			.catch(function(error){
				toast.error('Oops! Something happened. Try again later.');
			});
	}

	// Component functions
	constructor() {
		super();
		this.addToWatchlist = this.addToWatchlist.bind(this);
		this.addToFavorites = this.addToFavorites.bind(this);
	}

	render() {
		return(
			<li>
				<div className="columns">
					<div className="column">
						<h5 className="title is-6">{this.props.name}</h5>
						{/*<p>{this.props.director}, {this.props.year}</p>*/}
					</div>
					<div className="column">
						<p><button className="button is-default" onClick={this.addToWatchlist}>Add to watchlist</button></p>
						<p><button className="button is-default" onClick={this.addToFavorites}>Add to favorites</button></p>
					</div>
				</div>
			</li>
		);
	}
};

export default Item;
