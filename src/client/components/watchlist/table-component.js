import React from 'react';
import { getWatchlistItems, deleteWatchlistItem } from '../../api/watchlist';
import { addFavorite } from '../../api/favorites';

// Component requires
import Item from './item';
import { toast } from 'react-toastify';

class TableComponent extends React.Component {
	// Custom functions
	onDelete(item) {
		deleteWatchlistItem({ name: item })
			.then(function (response){
				this.setState({
					movies: response.data
				});
			}.bind(this))
			.catch(function (error){
				toast.error('Oops! Something happened. Try again later.');
			});
	}

	onMove(item) {	
		deleteWatchlistItem({ name: item })
			.then(function(responseDelete){
				addFavorite({ name: item })
					.then(function(responsePost){
						this.setState({
							movies: responseDelete.data
						});
						toast.success('Moved to favorites!');
					}.bind(this))
					.catch(function(error){
						toast.error('Oops! Something happened. Try again later.');
					});
			}.bind(this))
			.catch(function(error){
				toast.error('Oops! Something happened. Try again later.');
			});
	}

	// Component functions
	constructor() {
		super();
		this.state = {
			movies: []
		};
		this.onDelete = this.onDelete.bind(this);
		this.onMove = this.onMove.bind(this);
	}

	render() {
		let movies = this.state.movies;
		movies = movies.map(function(item, index){
			return(
				<Item name={item.name} key={index} onDelete={this.onDelete} onMove={this.onMove} />
			);
		}.bind(this));

		return(
			<table className="table is-fullwidth is-hoverable">
				<thead>
					<tr>
						<th>Name</th>
						<th>Director</th>
						<th>Year</th>
						<th>Move to favorites</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{movies}
				</tbody>
			</table>
		);
	}

	componentDidMount() {
		getWatchlistItems()
			.then(function (response){
				this.setState({
					movies: response.data
				});
			}.bind(this))
			.catch(function (error){
				toast.error('Oops! Can\'t retrieve your watchlist. Try again later.');
			});
	}
};

export default TableComponent;
